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

export default class Role extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.navigation.state.params.data,
      noRoles: 0,
      roles: [],
    };
  }

  render() {
    return (
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            {Roles.map((item, index) => (
              <TouchableOpacity
                style={styles.role}
                onPress={() => {
                  let roles = this.state.roles.slice();
                  roles[index] = 1;
                  this.setState(
                    {
                      roles,
                    },
                    () => {
                      console.log(this.state.roles, index);
                    },
                  );
                }}>
                <Text>{item.name}</Text>
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
  },
  role: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: '70%',
    margin: 10,
    borderWidth: 1,
    borderColor: 'lightgrey',
  },
});
