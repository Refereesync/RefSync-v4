import * as Sharing from 'expo-sharing';
import * as FileSystem from 'expo-file-system';

export const sharePdf = async (pdfBytes: Uint8Array, fileName = 'match.pdf') => {
  const path = FileSystem.cacheDirectory + fileName;
  await FileSystem.writeAsStringAsync(path, pdfBytes.toString(), {
    encoding: FileSystem.EncodingType.Base64
  });

  if (await Sharing.isAvailableAsync()) {
    await Sharing.shareAsync(path);
  } else {
    throw new Error('Sharing not available on this device');
  }
};