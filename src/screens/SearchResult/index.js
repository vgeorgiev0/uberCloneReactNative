import {StyleSheet, Dimensions, View} from 'react-native';
import React from 'react';
import HomeMap from '../../components/HomeMap';
import UberTypes from '../../components/UberTypes';

const SearchResult = () => {
  return (
    <View style={styles.container}>
      <View style={styles.map}>
        <HomeMap />
      </View>
      <View style={styles.types}>
        <UberTypes />
      </View>
    </View>
  );
};

export default SearchResult;

const styles = StyleSheet.create({
  container: {justifyContent: 'space-between'},
  map: {height: Dimensions.get('window').height - 420},
  types: {},
});
