import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Modal } from 'react-native';
import { Button } from 'react-native-web';
import Header from '../components/header';
import ProductCard from '../components/productCard';
import { globalStyles } from '../styles/global';
import { connect } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import CartItem from '../components/cartItem';
import AsyncStorage from '@react-native-async-storage/async-storage';

let productData = require('../data/sample-products.json');

const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key)
    return jsonValue != null ? jsonValue : null;
  } catch(e) {
    console.log(e);
    return null;
  }
}
let retrieveCartItems = function() {
  let cartData = getData('@cartState');
  cartData.then((result)=>{
    result = JSON.parse(result);
    console.log(result);
    let cartItems = [];
    // cartItems.push(<Text style={globalStyles.titleText} key={result.id}>{result.quantity}</Text>)
    cartItems.push(result.quantity);
    setCartItems
    console.log(cartItems);
    return cartItems;
    return result;
    setCartItems(cartItemsCopy);
    console.log(cartItems);
    console.log(cartItemsCopy);
  })
}

export default function Home({ navigation }) {
  const [products, setProducts] = useState(productData);
  const [cartItems, setCartItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
 
  let retrieveCartItems = function() {
    let cartData = getData('@cartState');
    cartData.then((result)=>{
      result = JSON.parse(result);
      let cartItems = [];
      cartItems.push(result.quantity);
      setCartItems(cartItems);
      return cartItems;
    })
  }

  const viewCart = function() {
    setModalVisible(true);
    retrieveCartItems();
    console.log("you're viewing the cart: ");
  }

  const closeModal = () => {
    setModalVisible(false);
  }

  return (
    <View style={globalStyles.container}>
      <View style={styles.headerIcon}>
        <AntDesign name='shoppingcart' size={28} onPress={() => viewCart()} />
        <Text>(5)</Text>
      </View>

      <Modal visible={modalVisible}>
        <Button  title='eXIT' onPress={() => closeModal()}></Button>
        <View>
          <Text>Black sheep</Text>
          <FlatList data={cartItems} renderItem={({ item: cartItem }) => (
            <>
              <CartItem />
              <Text>{cartItem}</Text>
            </>
          )} />
        </View>
      </Modal>

      <FlatList data={products} renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('ViewProductDetails', item)}>
          <ProductCard data={item} />
        </TouchableOpacity>
      )} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerIcon: {
    position: 'absolute',
    right: '0',
  }
});