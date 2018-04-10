import React                from 'react';
import {View, Text}         from 'react-native';



class MyOffer extends React.Component{
    render(){
        return(
            <View style={{ flex: 1, justifyContent:'center', alignItems: 'center'}}> 
                <Text>My Offers</Text>
            </View>
        );
    }
}

export default MyOffer;