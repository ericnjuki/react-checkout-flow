import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { globalStyles } from '../styles/global';

export default function Header() {


  return (
    <View style={globalStyles.header}>
      <View>
        <Text style={globalStyles.titleText}>Products</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headerIcon: {
    position: 'absolute',
    right: '0',
  }
});