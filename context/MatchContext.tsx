import React, { createContext, useState, ReactNode } from 'react';

export const MatchContext = createContext({});

export const MatchProvider = ({ children }: { children: ReactNode }) => {
  const [matchData, setMatchData] = useState(null);

  return (
    <MatchContext.Provider value={{ matchData, setMatchData }}>
      {children}
    </MatchContext.Provider>
  );
};
