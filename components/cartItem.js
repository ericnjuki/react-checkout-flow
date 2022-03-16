import React from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CartItem({ data: product }) {

  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        {/* <Image source={require(`../assets/product-images/${product.src}`)}
               style={{width: 100, height: 100}} />
        <Text style={styles.productName}>{ product.name }</Text>
        <Text style={styles.productPrice}>{ product.price }</Text> */}
        <Text>{ product.quantity }</Text>
        <Button  title='Add To Cart' onPress={() => addToCart(product.id, 1)}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  cardContent: {
    flexDirection: 'row',
    marginHorizontal: 18,
    marginVertical: 20,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  productPrice: {
    fontWeight: 'bold',
    color: '#00FF00',
  },
});