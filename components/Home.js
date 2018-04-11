import React                from 'react';
import {View, Text}         from 'react-native';
import HeaderNav            from './nav/HeaderNav';


class Home extends React.Component{
    static navigationOptions = {
        title: 'Desified',
      };
      
    render(){
        return(
            <View style={{ flex: 1, justifyContent:'center', alignItems: 'center'}}> 
                <HeaderNav />
                <Text>Home Page</Text>
            </View>
        );
    }
}

export default Home;