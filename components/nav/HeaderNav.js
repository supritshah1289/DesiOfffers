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
    },
    {
        navigationOptions:{
            headerStyle:{
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle:{
                fontWeight: 'bold',
            },
        },
    }
);
