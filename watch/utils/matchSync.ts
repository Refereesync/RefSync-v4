// Path: watch/utils/matchSync.ts

import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import { Platform } from 'react-native';
import { MatchEvent } from '../../types/match';
import { getRole } from '../../context/RoleContext';

const SYNC_FILE = `${FileSystem.documentDirectory}match_sync.json`;

let syncQueue: MatchEvent[] = [];
let isSyncing = false;

export async function addEventToQueue(event: MatchEvent) {
  syncQueue.push(event);
  await persistQueue();
  attemptSync(); // Fire-and-forget
}

async function persistQueue() {
  try {
    await FileSystem.writeAsStringAsync(SYNC_FILE, JSON.stringify(syncQueue));
  } catch (err) {
    console.warn('Failed to persist sync queue:', err);
  }
}

async function loadQueue() {
  try {
    const content = await FileSystem.readAsStringAsync(SYNC_FILE);
    syncQueue = JSON.parse(content) || [];
  } catch {
    syncQueue = [];
  }
}

export async function attemptSync() {
  if (isSyncing || syncQueue.length === 0) return;

  isSyncing = true;
  await loadQueue();

  const role = getRole();

  try {
    const response = await fetch('http://your-local-server/sync', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ role, events: syncQueue })
    });

    if (response.ok) {
      syncQueue = [];
      await FileSystem.deleteAsync(SYNC_FILE, { idempotent: true });
    } else {
      console.warn('Sync failed. Server responded with:', response.status);
    }
  } catch (err) {
    console.warn('Sync error:', (typeof err === "object" && err && "message" in err ? (typeof err === "object" && err && "message" in err ? err.message : "Unknown error") : "Unknown error"));
  } finally {
    isSyncing = false;
  }
}

export async function exportQueueToCSV() {
  const csvContent = syncQueue
    .map((e) => `${e.timestamp},${e.type},${e.team},${e.playerNumber || ''}`)
    .join('\n');

  const path = `${FileSystem.documentDirectory}match_export.csv`;
  await FileSystem.writeAsStringAsync(path, csvContent, {
    encoding: FileSystem.EncodingType.UTF8
  });

  if (Platform.OS !== 'web' && (await Sharing.isAvailableAsync())) {
    await Sharing.shareAsync(path);
  }

  return path;
}
