import React                from 'react';
import {View, Text}         from 'react-native';



class ListItem extends React.Component{
    render(){
        return(
            <View style={{ flex: 1, justifyContent:'center', alignItems: 'center'}}> 
                <Text>List items</Text>
            </View>
        );
    }
}

export default ListItem;