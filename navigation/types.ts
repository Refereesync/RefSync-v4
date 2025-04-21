import { MatchStats } from '../types';

export type RootStackParamList = {
  CompareStats: { stats: MatchStats[] };
  EndGamePrompt: undefined;
  ExportScreen: undefined;
  FingerprintLogin: undefined;
  HeatmapViewer: { data: MatchStats };
  Home: undefined;
  LoginScreen: undefined;
  MainMatchScreen: undefined;
  NotesScreen: undefined;
  PINLogin: undefined;
  Settings: undefined;
  Signup: undefined;
  Trends: undefined;
};