// ✅ utils/pdfExport.ts
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';
import { Event } from '../types';

export const exportMatchPDF = async (events: Event[], matchInfo: any) => {
  const html = `
    <html>
      <body>
        <h1>RefSync Match Summary</h1>
        <p><strong>${matchInfo.teams.home}</strong> vs <strong>${matchInfo.teams.away}</strong></p>
        <p><strong>Referee Rating:</strong> ${matchInfo.rating || 'Not provided'}</p>
        <hr />
        <ul>
          ${events
            .map(
              (e) =>
                `<li>${e.time} - ${e.type.toUpperCase()} - Player ${e.player} ${
                  e.fromAssistant ? '(Assistant)' : ''
                }</li>`
            )
            .join('')}
        </ul>
      </body>
    </html>
  `;

  const { uri } = await Print.printToFileAsync({ html });
  await Sharing.shareAsync(uri);
};
