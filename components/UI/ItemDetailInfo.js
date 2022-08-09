import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Color } from "../../constants/COLOR";

function ItemDetailInfo({ desc }) {
  return (
    <View style={styles.itemDescContainer}>
      <Text style={styles.itemDesc}>{desc}</Text>
    </View>
  );
}

export default ItemDetailInfo;
const styles = StyleSheet.create({
  itemDescContainer: {
    flex: 1,
    padding: 16,
    paddingBottom: 32,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    // borderRadius: 20,
    backgroundColor: Color.accentLight,
  },

  itemDesc: {
    fontSize: 16,
    lineHeight: 28,
    // color: Color.primary900,
    color: Color.accentDark,
  },
});
