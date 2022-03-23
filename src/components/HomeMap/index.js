import {StyleSheet, View} from 'react-native';
import React from 'react';
// import {WHITE} from '../../Constants/Colors';
import MapView, {Marker} from 'react-native-maps';

const HomeMap = () => {
  return (
    <View>
      <MapView
        style={styles.view}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker coordinate={{latitude: 37.78825, longitude: -122.4324}} />
      </MapView>
    </View>
  );
};

export default HomeMap;

const styles = StyleSheet.create({
  view: {
    // alignItems: 'center',
    // backgroundColor: BLACK,
    // height: 200,
    // justifyContent: 'center',
    // marginBottom: -15,
    height: 200,
    width: '100%',
  },
});
