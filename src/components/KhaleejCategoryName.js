import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

const KhaleejCategoryName = (props) => {
    var categoryColor;
    //"#66b3ff"
    switch (props.categoryName) {
        case 'Local':
            categoryColor = '#ff3300';
            break;
        case 'Sports':
            categoryColor = '#ff0066';
            break;
        case 'Business':
            categoryColor = '#cc0000';
            break;
        case 'TopNews':
            categoryColor = '#66b3ff';
            break;
        case 'Favourite':
            categoryColor = '#ff3300';
            break;
        default:
            return false;
    }
    return (
        <View style={{ backgroundColor: categoryColor, height: 30 }}>
            <Text style={{ color: 'white', justifyContent: 'center', alignSelf: 'center', marginTop: 5 }}>{props.categoryName}</Text>
        </View>
    );

}

export default KhaleejCategoryName;