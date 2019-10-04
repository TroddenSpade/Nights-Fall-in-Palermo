import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  StyleSheet
} from "react-native";

export default class Home extends React.Component {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <View style={styles.top}>
            <Text>Nights Fall In Palermo</Text>
          </View>
          <View style={styles.bottom}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate("Input")}
            >
              <Text>Lets Shed Some Blood</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // backgroundColor: "black"
  },
  top: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  bottom: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10
  }
});
