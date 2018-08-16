import React, { Component } from 'react';
import {
    Image, Text, View, StyleSheet, Dimensions, TouchableHighlight
} from 'react-native';
import { CameraKitCamera, CameraKitCameraScreen } from 'react-native-camera-kit';
// import Camera from 'react-native-camera';

const BannerWidth = Dimensions.get('window').width;

class CameraExample extends Component {
    render() {
        return (
            <CameraKitCameraScreen
                actions={{ rightButtonText: 'Done', leftButtonText: 'Cancel' }}
                onBottomButtonPressed={(event) => this.onBottomButtonPressed(event)}
                scanBarcode={true}
                laserColor={"blue"}
                frameColor={"yellow"}
                onReadQRCode={((event) => alert("Qr code found"))} //optional
                hideControls={false}           //(default false) optional, hide buttons and additional controls on top and bottom of screen
                showFrame={true}   //(default false) optional, show frame with transparent layer (qr code or barcode will be read on this area ONLY), start animation for scanner,that stoped when find any code. Frame always at center of the screen
                offsetForScannerFrame={10}   //(default 30) optional, offset from left and right side of the screen
                heightForScannerFrame={300}  //(default 200) optional, change height of the scanner frame
                colorForScannerFrame={'red'} //(default white) optional, change colot of the scanner frame
            />






            //            <CameraKitCamera
            //   ref={cam => this.camera = cam}
            //   style={{
            //     flex: 1,
            //     backgroundColor: 'white'
            //   }}
            //   cameraOptions={{
            //     flashMode: 'auto',             // on/off/auto(default)
            //     focusMode: 'on',               // off/on(default)
            //     zoomMode: 'on',                // off/on(default)
            //     ratioOverlay:'1:1',            // optional, ratio overlay on the camera and crop the image seamlessly
            //     ratioOverlayColor: '#00000077' // optional
            //   }}
            //   onReadQRCode={(event) => alert(event.nativeEvent.qrcodeStringValue)} // optional

            // /> 
        )
    }
}
export default CameraExample

