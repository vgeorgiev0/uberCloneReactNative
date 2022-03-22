import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BLACK, WHITE} from '../../Constants/Colors';

const HomeMap = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>HomeMap</Text>
    </View>
  );
};

export default HomeMap;

const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    backgroundColor: BLACK,
    height: 200,
    justifyContent: 'center',
    marginBottom: -15,
  },
  text: {
    color: WHITE,
  },
});
