/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

import HomeScreen from './src/screens/HomeScreen';

const App: () => Node = () => {
  const myIcon = <Icon name="stepforward" size={30} color="#900" />;

  return (
    <View>
      {myIcon}
      <Text>Hi</Text>
      <HomeScreen />
    </View>
  );
};

export default App;
