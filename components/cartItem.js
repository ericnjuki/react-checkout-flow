import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

let productData = require('../data/sample-products.json');

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

export default function CartItem({ data: product }) {
  const [cartItemData, setCartItemData] = useState(product);


  const updateStore = (id, changeInQuantity) => {
    var cartData = [];
    let currentCart = getData('@cartState');
    currentCart.then((result)=>{
      result = JSON.parse(result);
      let resultCopy = result.slice();
      for (let i = 0; i < result.length; i++) {
        if(result[i].id == id) {
          resultCopy[i].quantity += changeInQuantity;
        }
      }
      cartData = resultCopy;
      
      // use state?
      removeData('@cartState');
      storeData(JSON.stringify(cartData));
    })
  }



  const increaseQty = (id, quantity) => {
    let qty = cartItemData.quantity;
    qty += quantity;
    setCartItemData({id, quantity:qty});
    updateStore(id, quantity);
  }
  const decreaseQty = (id, quantity) => {
    let qty = cartItemData.quantity;
    if (qty === 0) {
      return;
    }
    qty -= quantity;
    setCartItemData({id, quantity:qty});
    updateStore(id, -Math.abs(quantity));
  }

  return (
    <View style={styles.card}>
      <Text style={styles.productName}>{ productData[cartItemData.id].name }</Text>
      <View style={styles.cardContent}>
        <Image source={{uri: productData[cartItemData.id].src}}
               style={{width: 100, height: 100}} />
        <Text>${productData[cartItemData.id].price } x </Text>
        <Button style={styles.qtyBtn} title='<' onPress={() => decreaseQty(cartItemData.id, 1)}></Button>
        <Text>{ cartItemData.quantity }</Text>
        <Button style={styles.qtyBtn} title='>' onPress={() => increaseQty(cartItemData.id, 1)}></Button>
        <Text style={styles.productPrice}>${ Math.floor(productData[cartItemData.id].price *  cartItemData.quantity * 100) / 100 }</Text>
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
    alignItems: 'center',
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
  qtyBtn: {
    marginLeft: 5
  }
});