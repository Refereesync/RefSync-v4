import { PDFDocument, PageSizes, rgb } from 'pdf-lib';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';

/**
 * Generates a basic PDF with match summary
 * @param title Title of the PDF document
 * @param content Array of strings to include in the document body
 */
export async function createMatchPdf(title: string, content: string[]) {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage(PageSizes.A4);
  const { width, height } = page.getSize();

  const fontSize = 12;
  const margin = 50;
  const lineHeight = 18;

  let y = height - margin;

  page.drawText(title, {
    x: margin,
    y,
    size: 18,
    color: rgb(1, 0.2, 0.2),
  });

  y -= 30;

  content.forEach((line) => {
    if (y < margin) return;
    page.drawText(line, {
      x: margin,
      y,
      size: fontSize,
      color: rgb(0, 0, 0),
    });
    y -= lineHeight;
  });

  const pdfBytes = await pdfDoc.save();

  const fileUri = `${FileSystem.documentDirectory}match_summary.pdf`;
  await FileSystem.writeAsStringAsync(fileUri, pdfBytes.toString('base64'), {
    encoding: FileSystem.EncodingType.Base64,
  });

  await Sharing.shareAsync(fileUri, {
    mimeType: 'application/pdf',
    dialogTitle: 'Share Match Summary PDF',
  });
}
