import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { globalStyles } from '../styles/global';
let productData = require('../data/sample-products.json');

export default function Home({ navigation }) {
  const [products, setProducts] = useState(productData);

  return (
    <View style={globalStyles.container}>
      <FlatList data={products} renderItem={({ item }) => (
        // <TouchableOpacity onPress={() => navigation.navigate('ViewProductDetails', product)}>
        <View style={globalStyles.productListing}>
        <Image source={item.src} />
          <Text style={globalStyles.titleText}>{ item.name }</Text>
        </View>
      )} />
    </View>
  );
}