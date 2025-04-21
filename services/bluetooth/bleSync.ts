// services/bluetooth/bleSync.ts
import * as Bluetooth from 'expo-bluetooth';

type BLEMatchSyncPayload = {
  matchId: string;
  event: any;
  timestamp: number;
  from: 'watch' | 'phone';
};

let connectedDevice: Bluetooth.BluetoothRemoteGATTServer | null = null;

export const scanAndConnect = async () => {
  const devices = await Bluetooth.scanForPeripheralsAsync({
    serviceUUIDs: ['match-sync'],
    scanDuration: 5000,
  });

  const refSyncDevice = devices.find(d => d.name?.includes('RefSyncPhone'));
  if (refSyncDevice) {
    connectedDevice = await refSyncDevice.connectGATTAsync();
    console.log('[BLE] Connected to RefSyncPhone');
  } else {
    console.warn('[BLE] RefSyncPhone not found');
  }
};

export const sendMatchEventOverBLE = async (payload: BLEMatchSyncPayload) => {
  if (!connectedDevice) {
    console.warn('[BLE] Not connected to device');
    return;
  }

  const service = await connectedDevice.getPrimaryServiceAsync('match-sync');
  const characteristic = await service.getCharacteristicAsync('match-event');

  await characteristic.writeValueAsync(JSON.stringify(payload));
  console.log('[BLE] Sent match event over BLE');
};
