/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {View} from 'react-native';

// import HomeScreen from './src/screens/HomeScreen';
import DestinationSearch from './src/screens/DestinationSearch';
// import SearchResult from './src/screens/SearchResult';

const App: () => Node = () => {
  return (
    <View>
      <DestinationSearch />
    </View>
  );
};

export default App;
