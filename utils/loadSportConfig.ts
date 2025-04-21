// utils/loadSportConfig.ts

import footballConfig from '../sports/football/config';
import rugbyConfig from '../sports/rugby/config';
import netballConfig from '../sports/netball/config';
import tennisConfig from '../sports/tennis/config';
import hockeyConfig from '../sports/hockey/config';

const configMap: Record<string, any> = {
  football: footballConfig,
  rugby: rugbyConfig,
  netball: netballConfig,
  tennis: tennisConfig,
  hockey: hockeyConfig,
};

export const loadSportConfig = (sport: string = "football") => {
  return configMap[sport] || configMap["football"];
};
