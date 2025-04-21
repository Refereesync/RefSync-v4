import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import MatchScreen from '../MatchScreen';

test('MatchScreen displays and updates score', () => {
  const { getByText } = render(<MatchScreen />);
  fireEvent.press(getByText('Add Goal Home'));
  expect(getByText('Home: 1')).toBeTruthy();
});