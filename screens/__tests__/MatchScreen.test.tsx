import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import MatchScreen from '../MatchScreen';

describe('MatchScreen', () => {
  it('renders correctly', () => {
    const { getByText } = render(<MatchScreen />);
    expect(getByText('Team A')).toBeTruthy();
    expect(getByText('Team B')).toBeTruthy();
  });

  it('updates score on button press', () => {
    const { getByText } = render(<MatchScreen />);
    const btnA = getByText('Add Point A');
    fireEvent.press(btnA);
    expect(getByText('Score A: 1')).toBeTruthy();
  });
});
