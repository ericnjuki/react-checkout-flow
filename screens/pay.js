import React from 'react';
import { StyleSheet, View, Text, Image, FlatList, TouchableOpacity, 
  TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global';
import CheckoutForm from './checkoutForm';

export default function Pay(props) {
  let total = props.navigation;

  const makePayment = (formOk) => {
    console.log(formOk);
  }
  const ccOnChange = (form) => {
    console.log(form);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={globalStyles.container}>
        <>
        <Text style={globalStyles.productTitle}>Choose your payment option</Text>
        <CheckoutForm makePayment={makePayment} />
        </>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({

})