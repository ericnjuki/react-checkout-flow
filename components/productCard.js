import React from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';

export default function ProductCard({ data: product }) {
  const addToCart = () => {
    console.log("added to cart");
  }

  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Image source={require(`../assets/product-images/${product.src}`)}
               style={{width: 400, height: 400}} />
        <Text style={styles.productName}>{ product.name }</Text>
        <Text style={styles.productPrice}>{ product.price }</Text>
        <Button  title='Add To Cart' onPress={addToCart}></Button>
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