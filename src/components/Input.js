import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default Input = () => {
  return (
    <View>
      <Text>HI</Text>
      <TouchableOpacity onPress={() => this.props.navigation.navigate("Input")}>
        <Text>Start</Text>
      </TouchableOpacity>
    </View>
  );
};
