import React, { Component } from 'react';
import {
    Image, Text, View, StyleSheet, Dimensions, TouchableOpacity
} from 'react-native';
import VideoPlayer from 'react-native-video-controls';
const BannerWidth = Dimensions.get('window').width;
class VideoTest1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            videoUrl: 'https://www.demonuts.com/Demonuts/smallvideo.mp4'
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <VideoPlayer
                    source={{ uri: this.state.videoUrl }}
                    style={styles.backgroundVideo} />
                <View style={styles.box1}>
                    <TouchableOpacity style={{
                        width: BannerWidth,
                        height: 200
                    }} onPress={() => this.setState({ videoUrl: 'https://vjs.zencdn.net/v/oceans.mp4' })}>
                        <Text style={{ color: 'red' }}></Text>
                    </TouchableOpacity>
                </View>
            </View>
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
    box1: {
        position: 'absolute',
        top: 0,
        left: 40,
        width: BannerWidth,
        height: 200,
        backgroundColor: 'transparent'
    },
})
export default VideoTest1