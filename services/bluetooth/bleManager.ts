v// services/bluetooth/bleManager.ts
import * as Bluetooth from 'expo-bluetooth';
import * as Device from 'expo-device';

let bleServer: Bluetooth.BluetoothGATTServer | null = null;

export const startBLEServer = async () => {
  if (!Device.isDevice) return;

  const isAvailable = await Bluetooth.isBluetoothAvailableAsync();
  if (!isAvailable) {
    await Bluetooth.requestBluetoothAsync();
  }

  bleServer = await Bluetooth.createPeripheralAsync({
    localName: 'RefSyncPhone',
    services: ['match-sync'],
  });

  bleServer.addEventListener('onWrite', (event) => {
    const { value } = event;
    try {
      const payload = JSON.parse(value);
      console.log('[BLE] Incoming payload:', payload);
      // 🔄 Trigger event sync logic here
    } catch (err) {
      console.error('[BLE] Invalid JSON payload');
    }
  });

  await bleServer.startAdvertisingAsync();
  console.log('[BLE] Peripheral started');
};

export const stopBLEServer = async () => {
  if (bleServer) {
    await bleServer.stopAdvertisingAsync();
    bleServer = null;
    console.log('[BLE] Peripheral stopped');
  }
};
