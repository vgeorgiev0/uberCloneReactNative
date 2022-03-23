import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
// import {WHITE} from '../../Constants/Colors';
import MapView, {Marker} from 'react-native-maps';
import cars from '../../assets/data/cars';

const HomeMap = () => {
  const getImageName = type => {
    if (type === 'UberX') {
      return require('../../assets/images/top-UberX.png');
    } else if (type === 'UberXL') {
      return require('../../assets/images/top-UberXL.png');
    } else return require('../../assets/images/top-Comfort.png');
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
        {cars.map(car => (
          <Marker
            key={car.id}
            coordinate={{latitude: car.latitude, longitude: car.longitude}}>
            <Image style={styles.marker} source={getImageName(car.type)} />
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

export default HomeMap;

const styles = StyleSheet.create({
  view: {
    height: '100%',
    width: '100%',
  },
  marker: {
    width: 60,
    height: 40,
    resizeMode: 'contain',
  },
});
