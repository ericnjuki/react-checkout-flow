import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { globalStyles } from '../styles/global';


export default function Header() {
  const viewCart = function() {
    console.log("viewing cart");
  }

  return (
    <View style={globalStyles.header}>
      <View>
        <Text style={globalStyles.titleText}>Products</Text>
      </View>
      {/* <AntDesign name="shoppingcart" size={24} color="black" /> */}
      <View style={styles.headerIcon}>
        <AntDesign name='shoppingcart' size={28} onPress={viewCart} />
        <Text>(5)</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headerIcon: {
    position: 'absolute',
    right: '0',
  }
});