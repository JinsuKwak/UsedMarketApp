import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Color } from "../../constants/COLOR";
import { getAddress } from "../../utill/LOCATION";
import { useNavigation } from "@react-navigation/native";

function FormattedLocation({ location }) {
  const [itemAddress, setItemAddress] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    async function handleLocation() {
      if (location) {
        const address = await getAddress(
          location.lat,
          location.lng,
          "postalCode"
        );
        setItemAddress(address);
      }
    }
    handleLocation();
  }, []);

  function showLocationHandler() {
    navigation.navigate("Map", {
      address: itemAddress,
      lat: location.lat,
      lng: location.lng,
    });
  }

  return (
    <TouchableOpacity onPress={showLocationHandler}>
      <View style={styles.locationContainer}>
        <Ionicons name="md-location-sharp" size={16} color={Color.primary300} />
        <View style={styles.location}>
          <Text style={styles.locationText}>{itemAddress}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default FormattedLocation;
const styles = StyleSheet.create({
  locationContainer: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
  },
  location: {
    paddingHorizontal: 4,
  },
  locationText: {
    color: Color.primary300,
    fontSize: 16,
    fontWeight: "500",
  },
});
