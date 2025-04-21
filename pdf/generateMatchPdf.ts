import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import { styles } from './pdfStyles';

export const generateMatchPdf = async (events, matchId) => {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([600, 800]);
  const { width, height } = page.getSize();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

  page.drawText(`Match Summary: ${matchId}`, {
    x: 50,
    y: height - 50,
    size: 20,
    font,
    color: rgb(0, 0, 0),
  });

  events.forEach((e, i) => {
    page.drawText(`${i + 1}. ${e.type} - Player ${e.playerNumber}`, {
      x: 50,
      y: height - 80 - i * 20,
      size: 12,
      font,
      color: rgb(0.2, 0.2, 0.2),
    });
  });

  const pdfBytes = await pdfDoc.save();
  const path = FileSystem.cacheDirectory + `Match_${matchId}.pdf`;
  await FileSystem.writeAsStringAsync(path, pdfBytes, {
    encoding: FileSystem.EncodingType.Base64,
  });

  await Sharing.shareAsync(path, {
    mimeType: 'application/pdf',
    dialogTitle: 'Match PDF',
    UTI: 'com.adobe.pdf',
  });
};
