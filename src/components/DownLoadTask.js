import React, { Component } from 'react';
import { Animated, Text, View, Button } from 'react-native';
import RNFetchBlob from 'react-native-fetch-blob';
class DownLoadTask extends Component {
    TestFunction() {
       RNFetchBlob
        .config({
            notification: true,
            path: 'downloads/pdf_test.pdf',
            indicator: true,
            overwrite: true,
            addAndroidDownloads: {
                path: RNFetchBlob.fs.dirs.SDCardDir +'/downloads/pdf_test.pdf',
                useDownloadManager: true,
                notification: true,
                overwrite: true,
                description: 'downloading content...',
                mime: 'application/pdf',
                mediaScannable: false
            }
        })
        .fetch('GET', 'http://www.pdf995.com/samples/pdf.pdf')
        .progress((received, total) => {
            console.log('progress', received / total)    
        })
//https://www.khaleejtimes.com/feedimage/897/16by9/storyimage/KT/20180613/ARTICLE/180619648/AR/0/AR-180619648.jpg
//image/*
//audio/mpeg
    }
 
    render() {

        return (
            <View style={{ flex: 1, justifyContent: 'center', margin: 8 }}>
                <Button onPress={this.TestFunction} title="Test Button" color="#009688" />
            </View>
        );
    }
}
export default DownLoadTask