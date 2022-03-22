import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BLACK, GREY, WHITE} from '../../Constants/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const HomeSearch = () => {
  return (
    <View>
      {/* <Text>Home Search</Text> */}
      <View style={styles.inputBox}>
        <Text style={styles.inputText}>Where To</Text>
        <View style={styles.timeContainer}>
          <AntDesign name="clockcircle" size={20} color={`${BLACK}9a`} />
          <Text style={styles.now}> Now </Text>
          <MaterialIcons name="keyboard-arrow-down" size={18} color={BLACK} />
        </View>
      </View>
      {/* input Box */}
      {/* Prev dest */}
      {/* Home dest */}
    </View>
  );
};

export default HomeSearch;

const styles = StyleSheet.create({
  inputBox: {
    backgroundColor: GREY,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderRadius: 20,
  },
  inputText: {
    fontSize: 20,
    fontWeight: '600',
    color: `${BLACK}7a`,
  },
  timeContainer: {
    flexDirection: 'row',
    width: 100,
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: WHITE,
    borderRadius: 30,
  },
  now: {},
});
