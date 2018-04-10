import React                from 'react';
import {View, Text, Image}         from 'react-native';
import HomePage             from '../Home';
import ListItem             from '../ListItem';
import Message              from '../Message';
import MyOffer              from '../MyOffer';
import Setting              from '../Setting';
import Ionicons             from 'react-native-vector-icons/Ionicons';
import {TabNavigator, 
        TabBarBottom, 
        TabBarTop
        }                      from 'react-navigation';


export default TabNavigator(
    {
        Home: {screen: HomePage},
        Message:{screen: Message},
        'List Item': {screen: ListItem},
        'My Offer': {screen: MyOffer},
        Settings: {screen: Setting},
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    return <Image source={require('../../images/home.png')} 
                                  style={{width: 28, height: 28}}
                            /> 
                }else if(routeName == 'Message'){
                    return <Image source={require('../../images/chat.png')} 
                                  style={{width: 28, height: 28}}
                            /> 
                }else if(routeName == 'List Item'){
                    return <Image source={require('../../images/camera.png')} 
                                  style={{width: 28, height: 28}}
                            /> 
                }else if(routeName == 'Settings'){
                    return <Image source={require('../../images/settings.png')} 
                                  style={{width: 28, height: 28}}
                            /> 
                }else if(routeName == 'My Offer'){
                    return <Image source={require('../../images/dollar.png')} 
                                  style={{width: 25, height: 25}}
                            /> 
                }
        
                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                // return <Ionicons name={iconName} size={25} color={tintColor} />;
            },
            }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
    }
);