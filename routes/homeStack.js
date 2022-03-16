import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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


// const Tab = createBottomTabNavigator();

// export default function HomeTabs() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={Home} />
//         <Tab.Screen name="Product Details" component={ViewProductDetails} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// home stack navigator screens
const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);


