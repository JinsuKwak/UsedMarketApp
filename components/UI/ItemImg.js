import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from "react-native";

function ItemImg({ imgSrc }) {
  const { width, height } = useWindowDimensions();
  //   console.log("werwer : " + imgSrc);
  //   console.log(imgSrc);

  return (
    <View style={[styles.itemImg, { width: width, height: width }]}>
      <Image
        style={{ width: width, height: width }}
        source={{
          uri: `${imgSrc}`,
        }}
        resizeMode={"cover"}
      />
    </View>
  );
}

export default ItemImg;
const styles = StyleSheet.create({
  itemImg: {
    flex: 1,
  },
});
