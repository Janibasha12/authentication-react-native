import React from 'react';
import { View, Text } from 'react-native';


const Header = (props) => {
  const  { ViewStyle, TextStyle } = styles;
return(
   <View style={ViewStyle}>
       <Text style={TextStyle}>
           {props.headerText}
       </Text>
   </View>
);
};

const styles = {
  ViewStyle: {
      backgroundColor:'#f8f8f8',
      justifyContent: 'center',
      alignItems: 'center',
      height: 60,
      paddingTop: 15,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      elevation: 2,
      position: 'relative'
  },
  TextStyle: {
      fontSize: 20,
  }
};
export { Header };