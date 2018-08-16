import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, Image } from 'react-native';

const BannerWidth = Dimensions.get('window').width;
const CategoryImage = (props) => {
    return (
      <View
          style={
             props.outerStyle
          }
        >
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: BannerWidth,
              height: 30,
            }}
          >
            <Image
              style={{
                flex: 1,
                width:BannerWidth
              }}
              source={props.imageUrlPath}
            />
          </View>
          <View
          >
            <Text
              style={{
                fontSize: 15,
                color: 'white',
                 marginLeft:6,
                 marginTop:3
              }}>
              {props.headerText}
            </Text>
          </View>
        </View>

    );
  
}

const styles = StyleSheet.create({
  labelStyle: {
    color: '#1e90ff',
    fontSize: 14
  }
});

export default CategoryImage;

