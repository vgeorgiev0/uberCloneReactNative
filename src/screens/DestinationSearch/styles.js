import {StyleSheet} from 'react-native';
import {BLACK, GREY} from '../../Constants/Colors';
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
  separator: {
    backgroundColor: `${BLACK}2a`,
    height: 1,
  },
  listView: {
    position: 'absolute',
    top: 105,
  },
  autocompleteContainer: {
    position: 'absolute',
    top: 0,
    left: 10,
    right: 10,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  iconContainer: {
    backgroundColor: `${BLACK}3a`,
    padding: 5,
    borderRadius: 50,
    marginRight: 15,
  },
  locationText: {color: BLACK},

  circle: {
    width: 7,
    height: 7,
    backgroundColor: BLACK,
    position: 'absolute',
    top: 20,
    left: 10,
    borderRadius: 5,
  },
  line: {
    width: 2,
    height: 50,
    backgroundColor: `${BLACK}3a`,
    position: 'absolute',
    top: 28,
    left: 12,
  },
  square: {
    width: 7,
    height: 7,
    backgroundColor: `${BLACK}8a`,
    position: 'absolute',
    top: 80,
    left: 10,
  },
  inputContainer: {position: 'absolute', top: 5, left: 10, right: 10},
});

export default styles;
