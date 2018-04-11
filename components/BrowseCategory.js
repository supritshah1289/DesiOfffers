import React                    from 'react';
import { View, Text }            from 'react-native';


class BrowseCategory extends React.Component{
    

    render(){
        return(
            <View style={{flex: 1, alignItems: 'center', alignContent: 'center', paddingTop: 20}}>
                <Text>Browse</Text>
            </View>
        );
    }
}


export default BrowseCategory;