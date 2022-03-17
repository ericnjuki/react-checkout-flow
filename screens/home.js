import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, Modal, TouchableOpacity, ScrollView, Image } from 'react-native';

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

export default function Home(props) {
  let navigation = props.navigation;
  const [products, setProducts] = useState(productData);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
 
  const retrieveCartItems = () => {
    let cartData = getData('@cartState');
    cartData.then((result)=>{
      result = JSON.parse(result);
      // let cartItems = [];
      // cartItems.push(result);
      if(result != null) {
        setCartItems(result);
        getCartTotal(result);
        return 1;
      } else {
        return -1;
      }
    })
  }
  const getCartItemsCount = () => {
    let cartData = getData('@cartState');
    cartData.then((result)=>{
      result = JSON.parse(result);
      if(result != null) {
        setCartItemsCount(result.length);
      }
    })
  }
  getCartItemsCount();

  const getCartTotal = (cartItemsCopy) => {
    let total = 0;
    for(let i = 0; i < cartItemsCopy.length; i++) {
      total += products[cartItemsCopy[i].id].price * cartItemsCopy[i].quantity;
    }
    Number(Math.round(parseFloat(total + 'e' + 2)) + 'e-' + 2);
    setCartTotal(total);
  }

  const viewCart = () => {
    retrieveCartItems();
    setModalVisible(true);
  }

  const closeModal = () => {
    retrieveCartItems();
    setModalVisible(false);
  }

  return (
    <View style={globalStyles.container}>
      <View style={styles.headerIconContainer}>
        <View style={styles.headerIcon}>
          <Text style={globalStyles.productTitle}>Cart</Text>
          <AntDesign name='shoppingcart' size={28} onPress={() => viewCart()} />
          <Text>({cartItemsCount})</Text>
        </View>
      </View>

      <Modal visible={modalVisible}>
        <ScrollView>
          <View>
            <AntDesign name='arrowleft' size={28} onPress={() => closeModal()} />
          </View>
          <View>
            <FlatList data={cartItems} renderItem={({ item: cartItem }) => (
              <>
                <CartItem data={cartItem} />
              </>
            )} />
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.checkoutBtn} onPress={() => navigation.replace('Checkout', {products, cartItems, cartTotal})}>
          <Text style={styles.checkoutBtnText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </Modal>
       
      <FlatList data={products} renderItem={({ item }) => (
        <TouchableOpacity onPress={() => {navigation.navigate('ViewProductDetails', item); getCartItemsCount()}}>
          <ProductCard data={item} setCartItemsCount={setCartItemsCount} />
        </TouchableOpacity>
      )} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerIconContainer: {
    marginBottom: 50,
    flex: 1,
  },  
  headerIcon: {
    position: 'absolute',
    right: '0',
    flex: 1,
    flexDirection: 'row',
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