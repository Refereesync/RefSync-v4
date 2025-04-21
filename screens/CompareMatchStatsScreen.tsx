// File: screens/CompareMatchStatsScreen.tsx
import React from 'react';
import HeatmapViewer from '../components/HeatmapViewer';

const CompareMatchStatsScreen = () => {
  return <HeatmapViewer />;
};

export default CompareMatchStatsScreen;


// File: screens/MainMatchView.tsx
import React from 'react';
import TossResultReplay from '../../components/TossResultReplay';

const MainMatchView = () => {
  return <TossResultReplay tossResult={{ winner: 'Team A', choice: 'Bat' }} />;
};

export default MainMatchView;


// File: screens/MatchEndScreen.tsx
import React from 'react';
import RateMatchPrompt from '../components/RateMatchPrompt';

const MatchEndScreen = () => {
  return <RateMatchPrompt />;
};

export default MatchEndScreen;


// File: screens/TimelineScreen.tsx
import React from 'react';
import TimelineItem from '../components/TimelineItem';

const TimelineScreen = () => {
  return <TimelineItem item={{ time: '10:00', description: 'Start' }} />;
};

export default TimelineScreen;


// File: watch/screens/MatchScreen.tsx
import React from 'react';
import EventButton from '../../components/EventButton';

const WatchMatchScreen = () => {
  return <EventButton />;
};

export default WatchMatchScreen;


// File: watch/WatchApp.tsx
import React from 'react';
import WatchNavigator from './watch/WatchNavigator';

const WatchApp = () => {
  return <WatchNavigator />;
};

export default WatchApp;


// File: watch/WatchNavigator.tsx
import React from 'react';
import MainWatchScreen from './watch/MainWatchScreen';
import SinBinTracker from './watch/SinBinTracker';
import WatchMatchSummary from './watch/WatchMatchSummary';
import AssistantPanel from './watch/AssistantPanel';

const WatchNavigator = () => {
  return (
    <>
      <MainWatchScreen />
      <SinBinTracker />
      <WatchMatchSummary />
      <AssistantPanel />
    </>
  );
};

export default WatchNavigator;


// File: watch/WatchSwipeNav.tsx
import React from 'react';
import MainTimer from './watch/MainTimer';
import WatchUtilities from './watch/WatchUtilities';
import SinBinTracker from './watch/SinBinTracker';

const WatchSwipeNav = () => {
  return (
    <>
      <MainTimer />
      <WatchUtilities />
      <SinBinTracker />
    </>
  );
};

export default WatchSwipeNav;


// File: types/index.ts
export interface MatchStats {
  id: string;
  teamA: string;
  teamB: string;
  scoreA: number;
  scoreB: number;
}

export interface TossResult {
  winner: string;
  choice: string;
}


// File: types/MatchStats.ts
export type Heatmap = number[][];
export interface HeatmapPoint {
  x: number;
  y: number;
  value: number;
}
