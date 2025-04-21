import React, { useState } from 'react';
import { View, Image, Button, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function AvatarUploader() {
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert('Permission Required', 'Camera roll access is required to upload avatar.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({ quality: 0.5 });
    if (!result.canceled && result.assets?.[0]?.uri) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.wrapper}>
      {image && <Image source={{ uri: image }} style={styles.avatar} />}
      <Button title="Upload Avatar" onPress={pickImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { marginBottom: 20, alignItems: 'center' },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 10 },
});
