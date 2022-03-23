import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import React from 'react';
import UberTypeRow from '../UberTypeRow';
import typesData from '../../assets/data/types';
import {BLACK, WHITE} from '../../Constants/Colors';

const UberTypes = () => {
  const confirm = () => {
    console.log('confirmed');
  };
  return (
    <View>
      {typesData.map(type => (
        <UberTypeRow key={type.id} type={type} />
      ))}
      <TouchableOpacity style={styles.confirm} onPress={confirm()}>
        <Text style={styles.text}>Confirm Uber</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  confirm: {
    backgroundColor: BLACK,
    padding: 10,
    margin: 10,
    alignItems: 'center',
  },
  text: {color: WHITE, fontWeight: 'bold'},
});

export default UberTypes;
