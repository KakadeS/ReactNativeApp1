import MapView from 'react-native-maps';

import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,  flex: 1,
        ...StyleSheet.absoluteFillObject,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

class MapExample extends Component {
  constructor(props){
    super(props);
    this.state = {
  markers: [{
    title: 'hello',
    coordinates: {
      latitude: 3.148561,
      longitude: 101.652778
    },
  },
  {
    title: 'hello',
    coordinates: {
      latitude: 3.149771,
      longitude: 101.655449
    },  
  }]
}
}
  render() {
    return (


<MapView 
   style={ styles.map }
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
>
  {this.state.markers.map(marker => (
    <MapView.Marker 
      coordinate={marker.coordinates}
      title={marker.title}
    />
  ))}
</MapView>
    );
  }

}

export default MapExample;