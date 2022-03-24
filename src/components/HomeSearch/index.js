import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {BLACK, BLUE, GREY, WHITE} from '../../Constants/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';

const HomeSearch = () => {
  const navigation = useNavigation();
  return (
    <View>
      {/* input Box */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('DestinationSearch');
        }}
        style={styles.inputBox}>
        <Text style={styles.inputText}>Where To</Text>
        <View style={styles.timeContainer}>
          <AntDesign name="clockcircle" size={20} color={`${BLACK}9a`} />
          <Text style={styles.now}> Now </Text>
          <MaterialIcons name="keyboard-arrow-down" size={18} color={BLACK} />
        </View>
      </TouchableOpacity>
      {/* Prev dest */}
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <AntDesign name="clockcircle" size={18} color={WHITE} />
        </View>
        <Text style={styles.destinationText}>Spin Nightclub</Text>
      </View>
      {/* Home dest */}
      <View style={styles.row}>
        <View style={[styles.iconContainer, {backgroundColor: BLUE}]}>
          <Entypo name="home" size={18} color={WHITE} />
        </View>
        <Text style={styles.destinationText}>Home</Text>
      </View>
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: GREY,
  },
  destinationText: {marginLeft: 15, fontWeight: '600', fontSize: 16},
  iconContainer: {
    backgroundColor: `${BLACK}6a`,
    padding: 15,
    borderRadius: 25,
  },
});
