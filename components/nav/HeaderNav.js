import React                    from 'react';
import {View, Text }            from 'react-native';
// import {    TabNavigator, 
//             TabBarTop
//         }                       from 'react-navigation';
import BrowseCategory           from '../BrowseCategory';
import Invite                   from '../Invite';

import { StackNavigator, TabBarBottom } from 'react-navigation';

export default StackNavigator(
    {
     Browse: {screen: BrowseCategory},
     Invite: {screen: Invite},
    },

    {
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
        tabBarPosition: 'top',
        animationEnabled: false,
        swipeEnabled: false,
    }
);
