import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Color } from "../../constants/COLOR";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

function ItemSubInfo({ date, visits, itemID }) {
  return (
    <View style={styles.itemSubInfoContainer}>
      <View style={styles.dateContainer}>
        <MaterialCommunityIcons
          name="clock-time-four"
          size={16}
          color={Color.accentDark300}
        />
        {/* <MaterialIcons
          name="access-time"
          size={16}
          color={Color.accentDark300}
        /> */}
        <Text style={[styles.text, { paddingHorizontal: 4 }]}>{date}</Text>
      </View>
      <View style={styles.subInfoContainer}>
        <View>
          <Text style={styles.text}>{visits} visits </Text>
        </View>
        <View>
          <Text style={styles.text}> | </Text>
        </View>
        <View>
          <Text style={styles.text}> ID : {itemID}</Text>
        </View>
      </View>
    </View>
  );
}

// itemID,
// owner,
// date,
// location,
// formattedAddress,
// visits,
// itemImgs,
// itemTitle,
// itemDesc,
// itemPrice

export default ItemSubInfo;
const styles = StyleSheet.create({
  itemSubInfoContainer: {
    flex: 1,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    // borderRadius: 20,
    backgroundColor: Color.accentLight,
    alignItems: "center",
    elevation: 1,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 1,
  },

  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  subInfoContainer: {
    flexDirection: "row",
  },

  text: {
    color: Color.accentDark300,
    fontSize: 10,
  },
});
