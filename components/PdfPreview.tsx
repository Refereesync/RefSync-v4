import React, { useEffect, useState } from 'react';
import { View, Button, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';
import { generateMatchPdf } from '../pdf/generateMatchPdf';
import * as FileSystem from 'expo-file-system';

const PdfPreview = ({ match }: { match: any }) => {
  const [uri, setUri] = useState('');

  useEffect(() => {
    const generate = async () => {
      const blob = await generateMatchPdf(match);
      const pdfPath = FileSystem.documentDirectory + 'match-preview.pdf';
      await FileSystem.writeAsStringAsync(pdfPath, await blob.text(), {
        encoding: FileSystem.EncodingType.UTF8,
      });
      setUri(pdfPath);
    };

    generate();
  }, []);

  if (!uri) return <ActivityIndicator />;

  return (
    <View style={{ flex: 1 }}>
      <WebView source={{ uri }} style={{ flex: 1 }} />
      <Button title="Share PDF" onPress={() => Sharing.shareAsync(uri)} />
    </View>
  );
};

export default PdfPreview;
