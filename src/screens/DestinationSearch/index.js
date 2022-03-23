import {View, SafeAreaView} from 'react-native';
import React, {useState, useEffect} from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import styles from './styles';
import env from '../../config/env';
import PlaceRow from './PlaceRow';
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
          enablePoweredByContainer={false}
          suppressDefaultStyles
          styles={{
            textInput: styles.textInput,
            container: styles.autocompleteContainer,
            listView: styles.listView,
            separator: styles.separator,
          }}
          placeholder="From"
          onPress={(data, details = null) => {
            setOriginPlace({data, details});
            console.log(details);
          }}
          fetchDetails={true}
          query={{
            key: api,
            language: 'en',
          }}
          renderRow={data => <PlaceRow data={data} />}
        />
        <GooglePlacesAutocomplete
          enablePoweredByContainer={false}
          suppressDefaultStyles
          styles={{
            textInput: styles.textInput,
            container: {
              ...styles.autocompleteContainer,
              top: 55,
            },
            separator: styles.separator,
          }}
          placeholder="Where to?"
          onPress={(data, details = null) => {
            setDestinationPlace({data, details});
            console.log(details);
          }}
          fetchDetails={true}
          query={{
            key: api,
            language: 'en',
          }}
          renderRow={data => <PlaceRow data={data} />}
        />
        {/* Circle near Origin input */}
        <View style={styles.circle} />

        {/* Line between dots */}
        <View style={styles.line} />

        {/* Square near Destination input */}
        <View style={styles.square} />
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;
