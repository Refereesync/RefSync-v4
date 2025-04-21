import NetInfo from '@react-native-community/netinfo';

export const subscribeToNetworkStatus = (callback: (isOnline: boolean) => void) => {
  return NetInfo.addEventListener(state => {
    callback(state.isConnected ?? false);
  });
};

export const getNetworkStatus = async (): Promise<boolean> => {
  const state = await NetInfo.fetch();
  return state.isConnected ?? false;
};