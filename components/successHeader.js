import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { globalStyles } from '../styles/global';

export default function SuccessHeader(props) {
  const navigation = props.navigation;

  return (
    <View style={globalStyles.header}>
      <View style={styles.headerBar}>
        <AntDesign name='arrowleft' size={28} style={styles.headerIcon} onPress={() => navigation.replace('Home')} />
        <Text style={globalStyles.titleText}>Thank You</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headerBar: {
    flex: 1,
    alignItems: 'center',
  },
  headerIcon: {
    position: 'absolute',
    left: '0',
  }
});