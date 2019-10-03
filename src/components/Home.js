import React from "react";
import { Text, TouchableOpacity, SafeAreaView, StatusBar } from "react-native";

export default class Home extends React.Component {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Input")}
          >
            <Text>Start</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </>
    );
  }
}
