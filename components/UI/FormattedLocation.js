import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Color } from "../../constants/COLOR";
import { getAddress } from "../../utill/LOCATION";

function FormattedLocation({ location }) {
  const [itemAddress, setItemAddress] = useState("");

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

  return (
    <Pressable>
      <View style={styles.locationContainer}>
        <Ionicons name="md-location-sharp" size={16} color={Color.primary300} />
        <View style={styles.location}>
          <Text style={styles.locationText}>{itemAddress}</Text>
        </View>
      </View>
    </Pressable>
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
