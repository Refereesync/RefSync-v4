// File: assets/icons/index.tsx

import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const icons = {
  play: (color: string, size = 24) => (
    <Ionicons name="play" size={size} color={color} />
  ),
  stop: (color: string, size = 24) => (
    <Ionicons name="stop" size={size} color={color} />
  ),
  flag: (color: string, size = 24) => (
    <Ionicons name="flag" size={size} color={color} />
  ),
  card: (color: string, size = 24) => (
    <Ionicons name="copy" size={size} color={color} />
  ),
  stats: (color: string, size = 24) => (
    <Ionicons name="bar-chart" size={size} color={color} />
  ),
  voice: (color: string, size = 24) => (
    <Ionicons name="mic" size={size} color={color} />
  ),
  sync: (color: string, size = 24) => (
    <Ionicons name="sync" size={size} color={color} />
  )
};

export default icons;
