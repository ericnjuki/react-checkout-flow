import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Success(props) {

  return (
      <View style={globalStyles.container}>
        <>
        <Text style={globalStyles.productTitle}>SUCCESSFUL PURCHASE!</Text>
        <Text style={globalStyles.productTitle}>Your goods will be mailed to you in the given address in a few days</Text>
        <Text style={globalStyles.productTitle}>Thank you for shopping with us</Text>
        </>
      </View>
  );
}