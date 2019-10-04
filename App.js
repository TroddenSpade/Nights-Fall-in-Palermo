import React from 'react';
import {View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Input from './src/components/Input';
import Home from './src/components/Home';
import Role from './src/components/Role';

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
});

export default createAppContainer(AppNavigator);
