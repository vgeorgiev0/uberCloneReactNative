import {StyleSheet, View} from 'react-native';
import React from 'react';
// import {WHITE} from '../../Constants/Colors';
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import api from '../../config/env';
import {BLACK} from '../../Constants/Colors';

const RouteMap = () => {
  const origin = {
    latitude: 28.450627,
    longitude: -16.263045,
  };
  const destination = {
    latitude: 28.450127,
    longitude: -16.283945,
  };
  return (
    <View>
      <MapView
        style={styles.view}
        initialRegion={{
          latitude: 28.450627,
          longitude: -16.263045,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={api.GOOGLE_API_KEY}
          strokeWidth={4}
          strokeColor={BLACK}
        />
        <Marker coordinate={origin} title={'Origin'} />
        <Marker coordinate={destination} title={'Destination'} />
      </MapView>
    </View>
  );
};

export default RouteMap;

const styles = StyleSheet.create({
  view: {
    height: '100%',
    width: '100%',
  },
});
