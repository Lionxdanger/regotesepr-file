import * as React from 'react';
import { View } from 'react-native';
import SoundButton from './components/SoundButton';
import Hr from './components/Header';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Hr />
        <SoundButton />
      </View>
    );
  }
}
