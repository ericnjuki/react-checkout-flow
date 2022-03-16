import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import ViewProductDetails from '../screens/viewProductDetails';
import Header from '../components/header';


const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      headerTitle: () => <Header />,
    }
  },
  ViewProductDetails: {
    screen: ViewProductDetails,
    navigationOptions: {
      title: 'Product Details'
    }
  },
};

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);