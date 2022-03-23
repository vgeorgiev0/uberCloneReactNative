/* eslint-disable react/prop-types */
/* eslint-disable react-native/no-raw-text */
import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {BLACK} from '../../Constants/Colors';
// import * as images from '../../assets/images';
import Ionicons from 'react-native-vector-icons/Ionicons';

const UberTypeRow = props => {
  const {type} = props;

  const getImageName = () => {
    if (type.type === 'UberX') {
      return require('../../assets/images/UberX.jpeg');
    } else if (type.type === 'UberXL') {
      return require('../../assets/images/UberXL.jpeg');
    } else return require('../../assets/images/Comfort.jpeg');
  };

  return (
    <View style={styles.mainContainer}>
      <Image style={styles.image} source={getImageName()} />
      <View style={styles.middleContainer}>
        <Text style={styles.type}>
          {type.type}
          <Ionicons name="person" size={16} color={BLACK} />3
        </Text>
        <Text style={styles.time}>9:01PM drop off</Text>
      </View>
      <View style={styles.rightContainer}>
        <Ionicons name="pricetag" size={18} color={'#42d742'} />
        <Text style={styles.price}>est. ${type.price}</Text>
      </View>
    </View>
  );
};

export default UberTypeRow;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    height: 70,
    width: 80,
    resizeMode: 'contain',
  },
  middleContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  type: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  time: {
    color: `${BLACK}5a`,
  },
  rightContainer: {
    width: 100,
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  price: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 5,
  },
});
