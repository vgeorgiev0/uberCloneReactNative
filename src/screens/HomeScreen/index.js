import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
const pink = '#faaf';

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>index</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {backgroundColor: pink},
});
