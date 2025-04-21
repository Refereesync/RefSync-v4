// Path: utils/reflectionStore.ts

import * as FileSystem from 'expo-file-system';

const REFLECTION_FILE = `${FileSystem.documentDirectory}reflections.json`;

interface ReflectionEntry {
  timestamp: string;
  difficulty: string;
}

export async function saveReflection(entry: ReflectionEntry): Promise<void> {
  const reflections = await loadReflections();
  reflections.push(entry);

  try {
    await FileSystem.writeAsStringAsync(
      REFLECTION_FILE,
      JSON.stringify(reflections, null, 2)
    );
  } catch (error) {
    console.warn('Error saving reflection:', error);
  }
}

export async function loadReflections(): Promise<ReflectionEntry[]> {
  try {
    const content = await FileSystem.readAsStringAsync(REFLECTION_FILE);
    return JSON.parse(content);
  } catch {
    return [];
  }
}
