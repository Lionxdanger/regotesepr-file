import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

class Hr extends React.Component {
  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.text}>Quiz buzzer app😁</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'red',
  },

  text: {
    color: 'white',
    fontSize: 22,
    padding: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default Hr