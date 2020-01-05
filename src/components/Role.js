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
      stats: [],
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
                style={[
                  styles.role,
                  this.state.stats[index] ? styles.green : null,
                ]}
                onPress={() => {
                  if (this.state.stats[index] == undefined) {
                    let roles = this.state.roles;
                    let stats = this.state.stats;
                    roles.push(index);
                    stats[index] = true;
                    this.setState(
                      {
                        roles,
                        stats,
                        noRoles: this.state.noRoles + 1,
                      },
                      () => console.log(this.state.noRoles),
                    );
                  } else {
                    let roles = this.state.roles;
                    for (var i = 0; i < roles.length; i++) {
                      if (roles[i] === index) {
                        roles.splice(i, 1);
                      }
                    }
                    let stats = this.state.stats;
                    stats[index] = undefined;
                    this.setState(
                      {
                        roles,
                        stats,
                        noRoles: this.state.noRoles - 1,
                      },
                      () => console.log(this.state.noRoles),
                    );
                  }
                }}>
                <Text>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
        <Button
          title="Pick up Roles"
          onPress={() => {
            if (this.state.no === this.state.noRoles) {
              this.props.navigation.navigate('Random', {data: this.state});
            } else {
              alert('roles != players');
            }
          }}
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
  green: {
    backgroundColor: 'green',
  },
});
