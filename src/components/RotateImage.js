import React, { Component } from 'react';
import {
    Animated, Image,
    Easing, Text, View, StyleSheet
} from 'react-native';
var spin;
class RotateImage extends Component {

    constructor() {
        super()
        this.spinValue = new Animated.Value(0)
    }
    componentDidMount() {
        this.spin()
    }
    spin() {
        this.spinValue.setValue(0)
        Animated.timing(
            this.spinValue,
            {
                toValue: 1,
                duration: 4000,
                easing: Easing.linear
            }
        ).start(() => this.spin())
    }
    // Second interpolate beginning and end values (in this case 0 and 1)

    render() {
        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        })
        return (
            <View style={styles.container}>
                <Animated.Image
                    style={{
                        width: 227,
                        height: 200,
                        transform: [{ rotate: spin }]
                    }}
                    source={{ uri: 'https://www.khaleejtimes.com/feedimage/897/16by9/storyimage/KT/20180327/ARTICLE/180329201/TS/1/TS-180329201.jpg' }}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default RotateImage