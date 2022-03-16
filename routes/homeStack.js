import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import ViewProductDetails from '../screens/viewProductDetails';

const screens = {
  Home: {
    screen: Home,
  },
  ReviewDetails: {
    screen: ViewProductDetails,
  },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);


