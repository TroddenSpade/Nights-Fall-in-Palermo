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

import Roles from '../data/roles.json';

export default class Random extends React.Component {
  constructor(props) {
    super(props);
    let arr = this.props.navigation.state.params.data.roles;
    var i, j, temp;
    for (i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }

    this.state = {
      ...this.props.navigation.state.params.data,
      roles: arr,
    };
    console.log(this.state);
  }

  render() {
    return (
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            {this.state.names.map((item, index) => (
              <TouchableOpacity
                style={styles.role}
                onPress={() => {
                  this.props.navigation.navigate('MyRole', {
                    data: Roles[this.state.roles[index]],
                  });
                  console.log(Roles[this.state.roles[index]]);
                }}>
                <Text>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
        <Button title="Pick up Roles" onPress={() => alert('done')} />
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
  scrollView: {
    height: '90%',
  },
  body: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  role: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: '40%',
    margin: 10,
    borderWidth: 1,
    borderColor: 'lightgrey',
  },
  green: {
    backgroundColor: 'green',
  },
});
