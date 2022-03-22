import {View} from 'react-native';
import React from 'react';
import HomeMap from '../../components/HomeMap';
import CovidMessage from '../../components/CovidMessage';

const HomeScreen = () => {
  return (
    <View>
      <HomeMap />
      <CovidMessage />
    </View>
  );
};

export default HomeScreen;
