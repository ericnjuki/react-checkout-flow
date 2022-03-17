import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import ViewProductDetails from '../screens/viewProductDetails';
import Header from '../components/header';
import Checkout from '../screens/checkout';
import Pay from '../screens/pay';
import Success from '../screens/success';
import SuccessHeader from '../components/successHeader';


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
  Checkout: {
    screen: Checkout,
    navigationOptions: {
      title: 'Checkout'
    }
  },
  Pay: {
    screen: Pay,
    navigationOptions: {
      title: 'Pay'
    }
  },
  Success: {
    screen: Success,
    navigationOptions: {
      header: (props) => <SuccessHeader {...props} />,
    }
  },

};

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);