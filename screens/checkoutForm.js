import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { globalStyles } from '../styles/global.js';
import { Formik } from 'formik';
import { CreditCardInput, LiteCreditCardInput } from "react-native-input-credit-card";
 


export default function CheckoutForm({ makePayment, ccOnChange }) {

  return (
    
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ name: '', email: '', country: '', city: '', shippingaddress: '', creditcard: '', creditcardexpiy: '', cvc: '' }}
        onSubmit={(values, actions) => {
          actions.resetForm(); 
          makePayment(values);
        }}
      >
        {props => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder='Full Name'
              onChangeText={props.handleChange('name')}
              value={props.values.name}
            />

            <TextInput
              style={globalStyles.input}
              placeholder='Email'
              onChangeText={props.handleChange('email')}
              value={props.values.email}
            />

            <TextInput
              style={globalStyles.input}
              placeholder='Shipping Address'
              onChangeText={props.handleChange('shippingaddress')}
              value={props.values.shippingaddress}
            />

            <TextInput 
              style={globalStyles.input}
              placeholder='Credit Card No.'
              onChangeText={props.handleChange('creditcard')}
              value={props.values.creditcard}
              keyboardType='numeric'
            />

            <TextInput
              style={globalStyles.input}
              placeholder='Expiry'
              onChangeText={props.handleChange('expiry')}
              value={props.values.email}
            />
            
            <CreditCardInput onChange={ccOnChange} />

            <Button color='maroon' title="Submit" onPress={props.handleSubmit} /> 
          </View>
        )}
      </Formik>
    </View>
    
  );
}