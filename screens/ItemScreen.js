import React from "react";
import {
  View,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import ItemImg from "../components/UI/ItemImg";
import ItemMainInfo from "../components/UI/ItemMainInfo";
import ItemOwnerInfo from "../components/UI/ItemOwnerInfo";
import ItemDetailInfo from "../components/UI/ItemDetailInfo";
import ItemSubInfo from "../components/UI/ItemSubInfo";

function ItemScreen({ route }) {
  const { width, height } = useWindowDimensions();
  const item = route.params.item;
  const fav = route.params.fav;

  return (
    <React.Fragment>
      <ScrollView style={styles.screen} scrollEventThrottle={50}>
        <View style={styles.screen}>
          <GestureHandlerRootView style={styles.screen}>
            <View style={styles.screen}>
              <Carousel
                style={{
                  width: width,
                  height: width,
                  backgroundColor: "#000",
                }}
                width={width}
                height={width}
                data={item.itemImgs}
                renderItem={({ index }) => {
                  return (
                    <ItemImg
                      imgSrc={item.itemImgs[index]}
                      style={{ flex: 1 }}
                    />
                  );
                }}
                panGestureHandlerProps={{
                  activeOffsetX: [-20, 20],
                  activeOffsetY: [-500, 500],
                }}
              />
            </View>
          </GestureHandlerRootView>
          <View style={styles.screen}>
            <View style={styles.itemMainInfo}>
              <ItemMainInfo
                title={item.itemTitle}
                price={item.itemPrice}
                location={item.location}
                itemID={item.itemID}
                fav={fav}
              />
            </View>
            <View style={styles.itemOwnerInfo}>
              <ItemOwnerInfo owner={item.owner} />
            </View>
            <View style={styles.itemDetailInfo}>
              <ItemDetailInfo desc={item.itemDesc} />
            </View>
            <View style={styles.itemSubInfo}>
              <ItemSubInfo
                date={item.date}
                visits={item.visits}
                itemID={item.itemID}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </React.Fragment>
  );
}

export default ItemScreen;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  itemMainInfo: { marginBottom: 8 },
  itemOwnerInfo: { marginBottom: 8 },
  itemDetailInfo: { marginBottom: 4 },
  itemSubInfo: { marginBottom: 4 },
});
