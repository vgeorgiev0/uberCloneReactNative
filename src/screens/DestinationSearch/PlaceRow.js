/* eslint-disable react/prop-types */
import React from 'react';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import {Text, View} from 'react-native';
import {BLACK, BLUE, RED, WHITE} from '../../Constants/Colors';

const PlaceRow = ({data}) => {
  console.log(data);

  return (
    <View style={styles.row}>
      <View
        style={[
          styles.iconContainer,
          {
            backgroundColor:
              data.description === 'Home' ? `${BLUE}9a` : `${BLACK}5a`,
          },
        ]}>
        <Entypo
          name={
            data.description === 'Home'
              ? 'home'
              : data.description === 'Work'
              ? 'suitcase'
              : 'location-pin'
          }
          size={25}
          color={
            data.description === 'Current location'
              ? RED
              : data.description === 'Home'
              ? `${BLACK}8a`
              : data.description === 'Work'
              ? BLACK
              : WHITE
          }
        />
      </View>
      <Text style={styles.locationText}>
        {data.description || data.vicinity}
      </Text>
    </View>
  );
};
export default PlaceRow;
