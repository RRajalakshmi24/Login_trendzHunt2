import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import COLORS from '../constants/COLORS';
import { createAppContainer } from 'react-navigation';
import { ProductStackNavigator } from './ProductNavigator';
import ProfileScreen from '../screens/Profile';
import { CartStackNavigator } from './CartNavigator';

import CategoriesScreen from '../screens/Category'; 
import ShopsScreen from '../screens/Shops';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const tabScreensConfig = {
  Home: { // Changed 'Products' to 'Home'
    screen: ProductStackNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => (
        <Ionicons name="home-outline" size={25} color={tabInfo.tintColor} />
      ),
    },
  },

  Categories: {
    screen: CategoriesScreen, // Replace with the actual component for Categories
    navigationOptions: {
      tabBarIcon: (tabInfo) => (
        <Ionicons name="grid-outline" size={25} color={tabInfo.tintColor} />
      ),
    },
  },
  
  'My Cart': { // Changed 'Cart' to 'My Orders'
    screen: CartStackNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => (
        <Ionicons name="cart-outline" size={25} color={tabInfo.tintColor} />
      ),
    },
  },
  
  Shops: {
    screen: ShopsScreen, // Replace with the actual component for Shops
    navigationOptions: {
      tabBarIcon: (tabInfo) => (
<MaterialIcons name="store" size={25} color={tabInfo.tintColor} />
      ),
    },
  },
  Account: { // Changed 'Profile' to 'Account'
    screen: ProfileScreen,
    navigationOptions: {
      tabBarIcon: (tabInfo) => (
        <Ionicons name="person-outline" size={25} color={tabInfo.tintColor} />
      ),
    },
  },
};

const AppTabNavigation = createMaterialBottomTabNavigator(tabScreensConfig, {
  activeColor: COLORS.primaryColor,
  shifting: true,
  barStyle: {
    backgroundColor: '#fff',
  },
});

export default createAppContainer(AppTabNavigation);
