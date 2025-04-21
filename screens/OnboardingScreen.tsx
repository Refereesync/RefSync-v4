import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import { View, Text, Image } from 'react-native';

const OnboardingScreen = ({ navigation }: any) => (
  <Onboarding
    onSkip={() => navigation.replace('LoginScreen')}
    onDone={() => navigation.replace('LoginScreen')}
    pages={[
      {
        backgroundColor: '#fff',
        image: <Image source={require('../assets/ref1.png')} />,
        title: 'Welcome to RefSync',
        subtitle: 'Manage your matches like a pro',
      },
      {
        backgroundColor: '#fef6e4',
        image: <Image source={require('../assets/whistle.png')} />,
        title: 'Log Events Easily',
        subtitle: 'Tap or speak to record in real time',
      },
      {
        backgroundColor: '#def3f6',
        image: <Image source={require('../assets/share.png')} />,
        title: 'Export & Share',
        subtitle: 'PDFs, stats and reports with one tap',
      }
    ]}
  />
);

export default OnboardingScreen;