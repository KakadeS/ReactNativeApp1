import React, { Component } from "react"
import {
  AppRegistry,
  StyleSheet,
  Button,
  Text,
  Image,
  Alert,
  View,
  AsyncStorage
} from 'react-native';
import PhotoUpload from 'react-native-photo-upload'
var imageUrlPath1 = 'https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg';
var imageUrlPath = 'https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg';
//var photokeyValue;
var setImagePath;
export default class ImageUpload extends Component {
  async setKey() {
    try {
      await AsyncStorage.setItem('photoKey', imageUrlPath);
    //  photokeyValue = await AsyncStorage.getItem('photoKey');
    } catch (error) {
      alert("Error setting data" + error);
    }
  }

  async getKey() {
    try {
      setImagePath = await AsyncStorage.getItem('photoKey');
    } catch (error) {
      alert("Error retrieving data" + error);
    }
  }
  render() {
    this.getKey();
    if (setImagePath !== null) {
      imageUrlPath = setImagePath;
    }
    else {
      imageUrlPath = 'https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg';
    }
    return (
      <PhotoUpload
        onResizedImageUri={avatar => {
          if (avatar) {
            imageUrlPath = avatar.uri;
            this.setKey();
          }
        }}
      >
        <Image
          style={{
            marginLeft: 5,
            width: 50,
            height: 50,
            borderRadius: 25
          }}
          resizeMode='cover'
           onError = {(e)=>{
                     uri: imageUrlPath1 
                    }}
          source={{
            uri: imageUrlPath
          }}
        />
      </PhotoUpload>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});