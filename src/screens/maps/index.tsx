import {View,SafeAreaView} from 'react-native';
import React from 'react';
import styles from './styles';
import MapView from 'react-native-maps';

const MapScreen = ({navigation, route}) => {

  return (
    <SafeAreaView style={{flex: 1}}>
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        initialRegion={{
          latitude: 43.77343,
          longitude: -79.33612,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421, 
        }}>
      </MapView>
    </View>
  </SafeAreaView>
  );
};

export default MapScreen;
