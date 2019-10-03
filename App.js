import React from "react";
import { View, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Input from "./src/components/Input";
import Home from "./src/components/Home";

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
  Input
});

export default createAppContainer(AppNavigator);
