
import NetInfo from '@react-native-community/netinfo';

export const listenNetworkChanges = (callback: (online: boolean) => void) => {
  return NetInfo.addEventListener(state => {
    callback(state.isConnected ?? false);
  });
};

export const checkOnline = async (): Promise<boolean> => {
  const state = await NetInfo.fetch();
  return state.isConnected ?? false;
};
