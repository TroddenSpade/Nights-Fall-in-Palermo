import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Button,
} from 'react-native';

export default class MyRole extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <View style={styles.body}>
          <Text>{this.props.navigation.state.params.data.name}</Text>
        </View>
        <Button
          title="I got it ;)"
          onPress={() => this.props.navigation.goBack()}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  top: {
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  body: {
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
