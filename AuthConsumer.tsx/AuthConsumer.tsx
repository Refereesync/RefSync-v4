import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import AppNavigator from '../navigation/AppNavigator';

export default function AuthConsumer() {
  const { user, loading } = useContext(AuthContext);
  if (loading) return null;
  return user ? <AppNavigator /> : null;
}
