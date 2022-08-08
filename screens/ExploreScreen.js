import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useEffect } from "react";
import { allItems } from "../data/dummyItemData";
import Item from "../components/UI/Item";
import { Color } from "../constants/COLOR";
// import { useNavigation } from "@react-navigation/native";

function ExploreScreen({ route }) {
  // const navigation = useNavigation();
  // navigation.navigate("ExploreD");

  //TODO get users fav list every time after rerender by useEffect()

  function renderItem({ item }) {
    return <Item item={item} fav={route.params.favorites} />;
  }
  return (
    <View style={styles.screen}>
      <Text style={styles.exploreHeader}>Recent ADs</Text>
      <View style={styles.exploreItemList}>
        <FlatList
          data={allItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.itemID}
        />
      </View>
    </View>
  );
}

export default ExploreScreen;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  exploreHeader: {
    fontSize: 18,
    marginVertical: 6,
    fontWeight: "bold",
    textAlign: "center",
    color: Color.accentDark,
  },
  exploreItemList: {
    justifyContent: "center",
    flex: 1,
  },
});
