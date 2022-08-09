import React from "react";
import {
  Pressable,
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  useWindowDimensions,
} from "react-native";
import { Color } from "../../constants/COLOR";
import ButtonFav from "./ButtonFav";
import { useNavigation } from "@react-navigation/native";

// itemID,
// owner,
// date,
// location,
// visits,
// itemImgs,
// itemTitle,
// itemDesc,
// itemPrice
function Item({ item, fav }) {
  const { width, height } = useWindowDimensions();
  const itemTitleWidth = parseInt((width * 94) / 100 - 8 - 10 - 140);
  const navigation = useNavigation();
  function itemClickHandler() {
    navigation.navigate("Item", { item: item, fav: fav });
  }

  return (
    <View style={styles.itemContainer}>
      <Pressable onPress={itemClickHandler}>
        <View style={styles.innerContainer}>
          <View style={styles.itemImage}>
            <Image
              style={{
                height: 140,
                width: 140,
                borderRadius: 8,
                overflow: "hidden",
              }}
              source={{
                uri: `${item.itemImgs[0]}`,
              }}
              resizeMode={"cover"}
            />
            <View>
              <Text style={styles.itemDate}>{item.date}</Text>
            </View>
          </View>
          <View>
            <View style={[styles.itemTitle, { width: itemTitleWidth }]}>
              <Text
                numberOfLines={2}
                ellipsizeMode="tail"
                style={{ fontSize: 16, color: Color.primary900 }}
              >
                {item.itemTitle}
              </Text>
            </View>
            <View style={styles.priceContainer}>
              <Text style={{ color: Color.primary300, fontSize: 14 }}>$</Text>
              <Text style={styles.itemPrice}>{item.itemPrice}</Text>
            </View>
            <View style={{ marginHorizontal: 10, flexDirection: "row" }}>
              <Text style={styles.itemLocation}>{item.formattedAddress}</Text>
            </View>
            <View style={{ width: itemTitleWidth, alignItems: "flex-end" }}>
              <ButtonFav itemID={item.itemID} fav={fav} />
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default Item;

const styles = StyleSheet.create({
  itemContainer: {
    alignSelf: "center",
    marginBottom: 10,
    borderRadius: 10,
    height: 180,
    width: "94%",
    elevation: 2,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerContainer: {
    flexDirection: "row",
    padding: 8,
    borderRadius: 10,
    height: 180,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 1,
    backgroundColor: Color.accentLight,
  },

  itemImage: {
    height: "100%",
    width: 140,
    borderRadius: 8,
    overflow: "hidden",
  },
  itemDate: {
    fontSize: 12,
    color: Color.accentDark500,
    paddingTop: 4,
  },
  itemTitle: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    height: 90,
  },
  itemLocation: { color: Color.accentDark500, fontSize: 12 },

  priceContainer: {
    flexDirection: "row",
    marginHorizontal: 10,
    height: 30,
    marginBottom: 6,
    alignItems: "flex-start",
    alignContent: "flex-start",
    justifyContent: "flex-start",
  },
  itemPrice: {
    color: Color.primary300,
    fontSize: 26,
    fontWeight: "500",
  },
});
