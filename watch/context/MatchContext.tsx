import React, { createContext, useReducer, useContext } from 'react';

const MatchContext = createContext<any>(null);

const initialState = { events: [] };

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'log':
      return { ...state, events: [...state.events, action.payload] };
    case 'undo':
      return { ...state, events: state.events.slice(0, -1) };
    default:
      return state;
  }
}

export const MatchProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <MatchContext.Provider value={{ state, dispatch }}>
      {children}
    </MatchContext.Provider>
  );
};

export const useMatchContext = () => useContext<any>(MatchContext);