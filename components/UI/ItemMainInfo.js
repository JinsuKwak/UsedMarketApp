import React from "react";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import ButtonFav from "./ButtonFav";
import FormattedLocation from "./FormattedLocation";
import { Color } from "../../constants/COLOR";

function ItemMainInfo({ title, price, location, itemID, fav }) {
  const { width, height } = useWindowDimensions();
  const itemTitleWidth = width - 16 * 2 - 4 - 22;
  return (
    <View style={styles.itemMainInfo}>
      <View style={styles.itemTitle}>
        <View style={[styles.itemTitleInner, { width: itemTitleWidth }]}>
          <Text
            numberOfLines={2}
            ellipsizeMode="tail"
            style={{ fontSize: 18, color: Color.primary900 }}
          >
            {title}
          </Text>
        </View>
        <ButtonFav style={{}} itemID={itemID} fav={fav} />
      </View>
      <View style={styles.itemPrice}>
        <Text style={{ color: Color.accentDark, fontSize: 16 }}>$</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
      <View style={styles.itemLocation}>
        <FormattedLocation location={location} />
      </View>
    </View>
  );
}

export default ItemMainInfo;
const styles = StyleSheet.create({
  itemMainInfo: {
    backgroundColor: Color.accentLight,
    Height: 180,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 1,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 1,
  },
  itemTitle: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    flexDirection: "row",
    justifyContent: "center",
    justifyContent: "space-between",
  },
  itemTitleInner: {
    paddingRight: 4,
  },

  itemPrice: {
    flexDirection: "row",
    paddingHorizontal: 16,
    alignItems: "flex-start",
  },

  price: {
    fontSize: 30,
    fontWeight: "500",
  },

  itemLocation: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 16,
  },
});
