import React from "react";
import MapView, { Marker, Circle } from "react-native-maps";
import { StyleSheet, useWindowDimensions, Text } from "react-native";
import { Color } from "../constants/COLOR";
import ButtonCopyAddress from "../components/UI/ButtonCopyAddress";

function Map({ route }) {
  const { width, height } = useWindowDimensions();
  const lat = route.params.lat;
  const lng = route.params.lng;
  const latDELTA = 0.006;
  const lngDELTA = latDELTA * (width / height);

  const region = {
    latitude: lat,
    longitude: lng,
    latitudeDelta: latDELTA,
    longitudeDelta: lngDELTA,
  };

  return (
    <React.Fragment>
      <MapView style={styles.map} initialRegion={region}>
        <Marker coordinate={{ latitude: lat, longitude: lng }} />
        <Circle
          center={{ latitude: lat, longitude: lng }}
          radius={50}
          strokeColor={Color.primary500}
          fillColor={Color.RGBAprimary300}
        />
      </MapView>
      <ButtonCopyAddress location={{ lat, lng }} />
    </React.Fragment>
  );
}

export default Map;
const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
