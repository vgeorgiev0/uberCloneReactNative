import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BLUE, WHITE} from '../../Constants/Colors';

const CovidMessage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel only if necessary</Text>
      <Text style={styles.text}>
        If you are already familiar with mobile development, you may want to use
        React Native CLI. It requires Xcode or Android Studio to get started.
      </Text>
      <Text style={styles.learnMore}>Learn More</Text>
    </View>
  );
};

export default CovidMessage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: BLUE,
    padding: 15,
    marginTop: -25,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  title: {
    color: WHITE,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    color: `${WHITE}9a`,
    fontSize: 15,
    marginBottom: 10,
  },
  learnMore: {
    color: WHITE,
    fontSize: 15,
    fontWeight: 'bold',
  },
});
