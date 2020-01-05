import React from 'react';
import {View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Input from './src/components/Input';
import Home from './src/components/Home';
import Role from './src/components/Role';
import Random from './src/components/Random';
import MyRole from './src/components/MyRole';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null,
    },
  },
  Input: {
    screen: Input,
  },
  Role: {
    screen: Role,
  },
  Random,
  MyRole: {
    screen: MyRole,
    navigationOptions: {
      header: null,
    },
  },
});

export default createAppContainer(AppNavigator);
