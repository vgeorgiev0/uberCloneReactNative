import {View, StyleSheet, SafeAreaView} from 'react-native';
import React, {useState, useEffect} from 'react';
import {BLACK, GREY} from '../../Constants/Colors';
// import {useState} from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import env from '../../config/env';
const api = env.GOOGLE_API_KEY;

const DestinationSearch = () => {
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  useEffect(() => {
    if (originPlace && destinationPlace) {
      console.log('Redirect');
    }
  }, [originPlace, destinationPlace]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          styles={{
            textInput: styles.textInput,
          }}
          placeholder="From"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            setOriginPlace({data, details});
            console.log(details);
          }}
          fetchDetails={true}
          query={{
            key: api,
            language: 'en',
          }}
        />
        <GooglePlacesAutocomplete
          styles={{
            textInput: styles.textInput,
          }}
          placeholder="Where to?"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            setDestinationPlace({data, details});
            console.log(details);
          }}
          fetchDetails={true}
          query={{
            key: api,
            language: 'en',
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;

const styles = StyleSheet.create({
  container: {padding: 10, height: '100%'},
  textInput: {
    padding: 10,
    backgroundColor: GREY,
    marginVertical: 5,
    marginHorizontal: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: `${BLACK}3a`,
    elevation: 5,
  },
});
