import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { Button } from 'react-native-web';
import ProductCard from '../components/productCard';
import { globalStyles } from '../styles/global';
let productData = require('../data/sample-products.json');

export default function Home({ navigation }) {
  const [products, setProducts] = useState(productData);
  const [cart, setCart] = useState({});


  return (
    <View style={globalStyles.container}>
      <FlatList data={products} renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('ViewProductDetails', item)}>
          <ProductCard data={item}>

          </ProductCard>
        </TouchableOpacity>
      )} />
    </View>
  );
}