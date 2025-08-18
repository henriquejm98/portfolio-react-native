import React from 'react';
import { StyleSheet } from 'react-native';
import profilePic from '../../assets/eu.jpeg'
import { Avatar } from 'react-native-paper';

export function Picture() {
  return (
    <>
        <Avatar.Image style={styles.avatar} size={100} source={profilePic} />
    </>
  );
}

const styles = StyleSheet.create({
    avatar: {
    alignSelf: 'center',
    marginTop: 60
  },
})