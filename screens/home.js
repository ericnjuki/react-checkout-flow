import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, Modal, TouchableOpacity, ScrollView } from 'react-native';

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

export default function Home(props) {
  let navigation = props.navigation;
  const [products, setProducts] = useState(productData);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
 
  let retrieveCartItems = function() {
    let cartData = getData('@cartState');
    cartData.then((result)=>{
      result = JSON.parse(result);
      // let cartItems = [];
      // cartItems.push(result);
      setCartItems(result);
      getCartTotal(result);
      // return cartItems;
    })
  }

  const getCartTotal = function(cartItemsCopy) {
    let total = 0;
    for(let i = 0; i < cartItemsCopy.length; i++) {
      total += products[cartItemsCopy[i].id].price * cartItemsCopy[i].quantity;
    }
    Number(Math.round(parseFloat(total + 'e' + 2)) + 'e-' + 2);
    setCartTotal(total);
  }

  const viewCart = function() {
    retrieveCartItems();
    setModalVisible(true);
  }

  const closeModal = () => {
    retrieveCartItems();
    setModalVisible(false);
  }

  return (
    <View style={globalStyles.container}>
      <View style={styles.headerIcon}>
        <AntDesign name='shoppingcart' size={28} onPress={() => viewCart()} />
        <Text>(5)</Text>
      </View>

      <Modal visible={modalVisible}>
        <ScrollView>
          <View>
            <AntDesign name='arrowleft' size={28} onPress={() => closeModal()} />
            {/* <Button  title='eXIT' onPress={() => closeModal()}></Button> */}
          </View>
          <View>
            <FlatList data={cartItems} renderItem={({ item: cartItem }) => (
              <>
                <CartItem data={cartItem} />
                {/* <Text>{cartItem.id}</Text> */}
              </>
            )} />
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.checkoutBtn} onPress={() => navigation.replace('Checkout', {products, cartItems, cartTotal})}>
          <Text style={styles.checkoutBtnText}>Proceed to Checkout</Text>
        </TouchableOpacity>
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
  },
  checkoutBtn: {
    padding: 10,
    backgroundColor: "#d4af37",
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  checkoutBtnText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});