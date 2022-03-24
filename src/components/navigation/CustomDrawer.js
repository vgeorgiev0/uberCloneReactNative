import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {BLACK, GREY, WHITE} from '../../Constants/Colors';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

const CustomDrawer = props => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.container}>
        <View style={styles.userRow}>
          <View style={styles.userPic} />

          <View>
            <Text style={styles.userName}>Valentin Georgiev</Text>
            <Text style={styles.userMoney}>5.00 *</Text>
          </View>
        </View>

        <View style={styles.messagesRow}>
          <Pressable
            onPress={() => {
              console.warn('Messages');
            }}>
            <Text style={styles.messagesText}>Messages</Text>
          </Pressable>
        </View>

        <Pressable
          onPress={() => {
            console.warn('Make Money Driving');
          }}>
          <Text style={styles.messagesText}>Do more with your account</Text>
        </Pressable>

        <Pressable
          onPress={() => {
            console.warn('Make Money Driving');
          }}>
          <Text style={styles.messagesText}>Make money driving</Text>
        </Pressable>
      </View>

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: BLACK, padding: 15},
  userRow: {flexDirection: 'row', alignItems: 'center'},
  userPic: {
    backgroundColor: GREY,
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {color: WHITE, fontSize: 24},
  userMoney: {color: `${GREY}2a`},
  messagesRow: {
    borderBottomWidth: 1,
    borderBottomColor: GREY,
    borderTopWidth: 1,
    borderTopColor: GREY,
    paddingVertical: 5,
    marginVertical: 10,
  },
  messagesText: {color: WHITE, paddingVertical: 5},
});

export default CustomDrawer;
