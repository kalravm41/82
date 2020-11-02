import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSideBarMenu  from './CustomSideBarMenu';
import SettingsScreen from '../screens/SettingsScreen';
import BarterrerDetailsScreen from '../screens/BartererDetailsScreen';

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator
    },
    settings: {screen: SettingsScreen},

    BarterScreen: {screen: BarterrerDetailsScreen},    
  },
  
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home_Screen'
  })
