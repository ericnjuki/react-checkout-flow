import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import CheckoutForm from './checkoutForm';
import AsyncStorage from '@react-native-async-storage/async-storage';

const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key)
  } catch(e) {
    console.log(e);
  }
}

export default function Pay(props) {
  let navigation = props.navigation;
  const totalAmount = navigation.getParam('total');

  const makePayment = (formOk) => {
    removeData('@cartState');
    navigation.push('Success');
  }

  return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.productTitle}>TOTAL: ${totalAmount}</Text>
        <>
        <Text style={globalStyles.productTitle}>Choose your payment option</Text>
        <CheckoutForm data={{makePayment, navigation}} />
        </>
      </View>
  );
}

const styles = StyleSheet.create({

})