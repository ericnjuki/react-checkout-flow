import React from 'react';
import { StyleSheet, View, Text, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Checkout(props) {
  let getItems = (items) => {
    for(let i = 0; i < items.length; i++) {
      let itemTotal = items[i].quantity * products[items[i].id].price;
      items[i] = {...items[i], itemTotal }
    }
    return items;
  }
  let navigation = props.navigation;
  let products = navigation.getParam('products');
  let items = getItems(navigation.getParam('cartItems'));
  let total = navigation.getParam('cartTotal');

  return (
    <View style={globalStyles.container}>
      <ScrollView>
        <Text style={globalStyles.productTitle}>Confirm Purchase</Text>
        <FlatList data={items} renderItem={({ item }) => (
          <View style={styles.productListItem}>
            <Text>{ item.quantity } x { products[item.id].name }</Text>
            <Image source={{uri: products[item.id].src}}
                  style={{width: 100, height: 100}} />
            <Text>{ item.quantity } x ${ products[item.id].price }</Text>
            <Text> = ${ Math.floor(item.itemTotal * 100) / 100 }</Text>
          </View>
        )} />
        <Text>TOTAL: ${total}</Text>
      </ScrollView>
      <TouchableOpacity style={styles.checkoutBtn} onPress={() => navigation.push('Pay', {total})}>
        <View style={styles.productListItem}>
          <Text style={{textAlign:'center'}}>Proceed to Enter Payment Details</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  productListItem: {
    flex: 1,
    justifyContent: 'center',
  },
  checkoutBtn: {
    padding: 10,
    backgroundColor: "#2196f3",
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  checkoutBtnText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
})