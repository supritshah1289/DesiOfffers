import React                from 'react';
import {View, Text}         from 'react-native';



class Message extends React.Component{
    render(){
        return(
            <View style={{ flex: 1, justifyContent:'center', alignItems: 'center'}}> 
                <Text>Messgae</Text>
            </View>
        );
    }
}

export default Message;