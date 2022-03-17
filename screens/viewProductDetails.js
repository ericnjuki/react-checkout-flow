import React from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ViewProductDetails({ navigation }) {

  // const addToCart = () => {
  //   console.log("added to cart");
  // }

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.productTitle}>{ navigation.getParam('name') }</Text>
      <Image source={{uri: navigation.getParam('src')}}
             style={{width: 400, height: 400}} />
      <Text>{ navigation.getParam('description') }</Text>
      <Text style={globalStyles.productTitle}>${ navigation.getParam('price') }</Text>
      {/* <Button title='Add To Cart' onPress={addToCart}></Button> */}
    </View>
  );
}