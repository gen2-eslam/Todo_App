import * as React from 'react';
import { View, Text } from 'react-native';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import OnBoardingScreen from './src/screens/onboarding_screen';
import MyTabs from './src/screens/(tabs)/tabs';
import TaskScreen from './src/screens/task_screen/task_screen';
import store from './src/redux/store';
import AddTaskListScreen from './src/screens/home/componant/add_task_list_Dialog';
const RootStack = createNativeStackNavigator({
  initialRouteName: 'onBoardingScreen',
  // initialRouteName: 'tabs',
  screens: {
    onBoardingScreen: {
      screen: OnBoardingScreen,
      options: {
        headerShown: false,
      },
    },
    tabs: {
      screen: MyTabs,
      options: {
        headerShown: false,
      },
    },
    addTaskListScreen: {
      screen: AddTaskListScreen,
      options: {
        headerShown: false,
      },
    },
    taskScreen: {
      screen: TaskScreen,
      options: {
        headerShown: false,
      },
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
