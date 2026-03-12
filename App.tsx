
import * as React from 'react';
import { View, Text } from 'react-native';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnBoardingScreen from './src/screens/onboarding_screen';
import MyTabs from './src/screens/(tabs)/tabs';
const RootStack = createNativeStackNavigator({
  initialRouteName:"tabs",
  screens: {
    onBoardingScreen: {
      screen: OnBoardingScreen,
      options: {
        headerShown: false,
      },
    },
    tabs:{
      screen: MyTabs,
        options: {
        headerShown: false,
      },
    }
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}