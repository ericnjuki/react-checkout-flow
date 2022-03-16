import React from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProductCard({ data: product }) {
  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('@cartState', value)
    } catch (e) {
      console.log(e);
    }
  }

  const getData = async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key)
      return jsonValue != null ? jsonValue : null;
    } catch(e) {
      console.log(e);
      return null;
    }
  }

  const removeData = async (key) => {
    try {
      await AsyncStorage.removeItem(key)
    } catch(e) {
      console.log(e);
    }
  }


  const addToCart = (id, quantity) => {
    var cartData = [];
    let currentCart = getData('@cartState');
    currentCart.then((result)=>{
      // check if item in cart
    if(result == null) {
      cartData.push({id:id, quantity:quantity});
      storeData(JSON.stringify(cartData));
    } else {
        result = JSON.parse(result);
        let resultCopy = result.slice();
        for (let i = 0; i < result.length; i++) {
          if(result[i].id == id) {
            // if item is in cart, increase qty
            resultCopy[i].quantity++;
          } else if(i === result.length - 1) {
            // otherwise, it's a new item
            resultCopy.push({id:id, quantity:quantity});
          }
        }
        cartData = resultCopy;
        
        // use state?
        removeData('@cartState');
        storeData(JSON.stringify(cartData));
      }    
    })
  }

  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Image source={require(`../assets/product-images/${product.src}`)}
               style={{width: 400, height: 400}} />
        <Text style={styles.productName}>{ product.name }</Text>
        <Text style={styles.productPrice}>{ product.price }</Text>
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