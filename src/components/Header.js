import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground, Image, Text, TouchableOpacity, TouchableHighlight } 
from 'react-native';
import {Actions} from 'react-native-router-flux';
import { Button } from './common'; 
import { StackNavigator } from 'react-navigation';

class Header extends Component {
  render() {
    //alert(JSON.stringify(this.props.navigation));
    return (
       <View style={styles.viewStyle}>
         <Button drawerImg={require('./images/icn_menu_normal.png')} drawerstyle ={{flex: 1,
            height: 30, 
            width: 30,
            position: "absolute", bottom: 0, 
            justifyContent: 'flex-start',
            left :20,
            marginTop:10,
            marginBottom:10,}}  
            onPress={() => this.props.navigation.navigate("DrawerToggle")}
            />

           <Image  source={require('./images/logo.png')} style={styles.image} />

           <Button drawerImg={require('./images/icn_search_normal.png')} drawerstyle ={{ flex: 1,
            height: 30, 
            width: 30,
            position: "absolute", bottom: 0, 
            justifyContent: 'flex-end',
            right :60,
            marginTop:20,
            marginBottom:10,}} onPress={()=>alert("Search")}/>

             <Button drawerImg={require('./images/icn_setting_normal.png')} drawerstyle ={{flex: 1,
            height: 30, 
            width: 30,
            position: "absolute", bottom: 0, 
            justifyContent: 'flex-end',
            right :20,
            marginTop:20,
            marginBottom:10,}} onPress={()=>alert("Setting")}/>
      </View>
    );
  }
}
 const styles = {
    innerviewStyle : {
     
      height: 30, 
            width: 30,
      backgroundColor:'#00BFFF',
     
  },
        viewStyle : {
            backgroundColor:'#00BFFF',
            justifyContent:'center',
            alignItems:'center',
            height:50,
            flexDirection: 'row',
            shadowOffset:{width : 0,height :5},
            shadowOpacity:0.9,
            elevation:2,
            position:'relative',
           
        },
        // textStyle:{
        //     margin: 24,
        //     fontSize: 20,
        //     fontWeight: 'bold',
        //     textAlign: 'center',
        //     color: 'white',
        //     flexDirection: 'row',
        //     backgroundColor: 'transparent',
        // },
        image: {
           
            height:50,
           resizeMode:'contain',
           marginTop:10,
            alignItems: 'center',
            justifyContent:'center',
           
          },
          searchImage:{
            flex: 1,
            height: 30, 
            width: 30,
            position: "absolute", bottom: 0, 
            justifyContent: 'flex-end',
            right :60,
            flexDirection: 'row',
            marginTop:20,
            marginBottom:10,
          },
          settingImage:{
            flex: 1,
            height: 30, 
            width: 30,
            position: "absolute", bottom: 0, 
            justifyContent: 'flex-end',
            right :20,
            flexDirection: 'row',
            marginTop:20,
            marginBottom:10,
          },
          drawerImage:{
            flex: 1,
            height: 30, 
            width: 30,
            position: "absolute", bottom: 0, 
            justifyContent: 'flex-start',
            left :20,
            flexDirection: 'row',
            marginTop:10,
            marginBottom:10,
          }
         

  };
export default Header;

