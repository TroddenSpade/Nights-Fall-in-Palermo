import React from 'react';
import {
  View,
  Text,
  Picker,
  StyleSheet,
  ScrollView,
  TextInput,
  SafeAreaView,
  Button,
} from 'react-native';

export default class Input extends React.Component {
  state = {
    no: 5,
    names: [],
  };

  playerNo = [
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
  ];

  done() {
    for (let i = 0; i < this.state.no; i++) {
      if (this.state.names[i] === '' || this.state.names[i] === undefined) {
        alert('empty');
        return;
      }
    }
    alert('nice');
  }

  render() {
    let list = [];
    for (let i = 0; i < this.state.no; i++) {
      list.push(
        <TextInput
          style={styles.textinput}
          onChangeText={text => {
            let names = this.state.names.slice();
            names[i] = text;
            this.setState({
              names,
            });
          }}
          value={this.state.names[i]}
        />,
      );
    }
    return (
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.top}>
              <View>
                <Text>Number of Players</Text>
              </View>
              <Picker
                style={styles.picker}
                itemStyle={{height: 100}}
                selectedValue={this.state.no}
                onValueChange={newNo => this.setState({no: newNo})}>
                {this.playerNo.map(item => (
                  <Picker.Item label={item.toString()} value={item} />
                ))}
              </Picker>
            </View>
            <View style={styles.users}>{list}</View>
          </View>
        </ScrollView>
        <Button title="Pick up Roles" onPress={this.done.bind(this)} />
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
  picker: {
    width: 50,
  },
  users: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    height: '90%',
  },
  textinput: {
    margin: 10,
    width: 200,
    height: 50,
    borderColor: 'lightgrey',
    borderWidth: 1,
    padding: 10,
  },
});
