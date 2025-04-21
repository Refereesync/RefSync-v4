import { generateMatchPdf } from '../pdf/generateMatchPdf';

describe('generateMatchPdf', () => {
  it('should return a PDF byte array', async () => {
    const result = await generateMatchPdf([], 'mock-match-id');
    expect(result).toBeDefined();
  });
});