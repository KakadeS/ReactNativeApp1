import React, { Component } from 'react';
import {
    Image, Text, View, StyleSheet,Dimensions
} from 'react-native';
import VideoPlayer from 'react-native-video-controls';

const BannerWidth = Dimensions.get('window').width;
class VideoTest extends Component {
    render() {
        return (
           <VideoPlayer
    source={{ uri: 'https://vjs.zencdn.net/v/oceans.mp4' }}
    style={styles.backgroundVideo} />    
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    backgroundVideo: {
        flex: 1,
        width: BannerWidth,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
})
export default VideoTest