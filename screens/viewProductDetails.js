import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ViewProductDetails({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text>{ navigation.getParam('name') }</Text>
      <Text>{ navigation.getParam('description') }</Text>
      <Text>{ navigation.getParam('price') }</Text>
    </View>
  );
}