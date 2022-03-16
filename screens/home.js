import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { globalStyles } from '../styles/global';
let productData = require('../data/sample-products.json');

export default function Home({ navigation }) {
  const [products, setProducts] = useState(productData);

  return (
    <View style={globalStyles.container}>
      <FlatList data={products} renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('ViewProductDetails', item)}>
          <View style={globalStyles.productListing}>
            <Image source={require(`../assets/product-images/${item.src}`)}
                   style={{width: 400, height: 400}} />
            <Text style={globalStyles.titleText}>{ item.name }</Text>
          </View>
        </TouchableOpacity>
      )} />
    </View>
  );
}