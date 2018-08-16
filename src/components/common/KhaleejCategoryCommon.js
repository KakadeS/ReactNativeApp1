import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

const KhaleejCategoryCommon = (props) =>  {
    return (
     <View style={props.outerViewstyle}>
                        <TouchableOpacity >
                            <Image source={props.imgSrcPath} style={props.outerImgStyle} />
                        </TouchableOpacity>
                     </View>
    );
  
}

const styles = StyleSheet.create({
  labelStyle: {
    color: '#1e90ff',
    fontSize: 14
  }
});

export { KhaleejCategoryCommon };

