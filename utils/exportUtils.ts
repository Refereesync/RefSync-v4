// File: utils/exportUtils.ts

import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import { MatchStats, TossResult } from '../types';

export async function exportMatchAsPDF(
  matchStats: MatchStats,
  tossResult?: TossResult
) {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([600, 800]);
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

  const drawText = (text: string, y: number) => {
    page.drawText(text, {
      x: 40,
      y,
      size: 14,
      font,
      color: rgb(0, 0, 0)
    });
  };

  let y = 760;
  drawText('Match Summary', y);
  y -= 30;
  drawText(`Referee: ${matchStats.referee}`, y);
  y -= 20;
  drawText(`Date: ${matchStats.date}`, y);
  y -= 20;
  drawText(`Location: ${matchStats.venue}`, y);
  y -= 30;
  drawText(`Home Team: ${matchStats.homeTeam.name}`, y);
  y -= 20;
  drawText(`Away Team: ${matchStats.awayTeam.name}`, y);

  if (tossResult) {
    y -= 30;
    drawText('--- Coin Toss Result ---', y);
    y -= 20;
    drawText(`Toss Winner: ${tossResult.team}`, y);
    y -= 20;
    drawText(`Choice: ${tossResult.choice}`, y);
    y -= 20;
    drawText(`Kickoff: ${tossResult.kickoffTeam}`, y);
  }

  y -= 40;
  drawText('Goals & Events:', y);
  matchStats.events.forEach((e, i) => {
    y -= 20;
    drawText(`${e.minute}' - ${e.description}`, y);
  });

  const pdfBytes = await pdfDoc.save();
  const path = FileSystem.documentDirectory + 'match_summary.pdf';
  await FileSystem.writeAsStringAsync(path, pdfBytes, {
    encoding: FileSystem.EncodingType.Base64
  });

  await Sharing.shareAsync(path);
}

export function exportMatchAsCSV(matchStats: MatchStats) {
  const headers = ['Minute', 'Event'];
  const rows = matchStats.events.map((e) => `${e.minute},${e.description}`);
  const csv = [headers.join(','), ...rows].join('\n');
  const path = FileSystem.documentDirectory + 'match_summary.csv';
  return FileSystem.writeAsStringAsync(path, csv).then(() => Sharing.shareAsync(path));
}
