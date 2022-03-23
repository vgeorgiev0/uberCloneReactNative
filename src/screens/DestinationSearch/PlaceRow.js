/* eslint-disable react/prop-types */
import React from 'react';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import {Text, View} from 'react-native';

const PlaceRow = ({data}) => {
  return (
    <View style={styles.row}>
      <View style={styles.iconContainer}>
        <Entypo name="location-pin" size={20} color={'white'} />
      </View>
      <Text style={styles.locationText}>
        {data.description || data.vicinity}
      </Text>
    </View>
  );
};
export default PlaceRow;
