import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';


const Button = (props) => {

    return (
         <TouchableOpacity style={[styles.buttonContainer,props.drawerstyle]}  onPress={props.onPress}>
                <Image source={props.drawerImg} style={{resizeMode:'center',height:30,width:30}} />
        </TouchableOpacity>
        
    );
}

const styles = {

    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 1,
        marginRight: 1,

    },
     buttonContainer: {
        backgroundColor: 'transparent'
    },
    textstyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: 'bold',
        paddingTop: 10,
        paddingBottom: 10,

    }
}
export { Button };
