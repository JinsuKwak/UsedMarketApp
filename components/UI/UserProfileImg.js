import { View, StyleSheet, Image, Text } from "react-native";
import { Color } from "../../constants/COLOR";
import { user2, user3, user4 } from "../../data/dummyUserData"; //TODO
const DB = [user2, user3, user4]; //TODO

function UserProfileImg({ dim, userID }) {
  const owner = DB.find((el) => el.userID === userID);
  const imgSrc = owner?.userImg
    ? { uri: owner.userImg }
    : require("../../assets/user.png");

  return (
    <View style={[styles.userImg, { width: dim, height: dim }]}>
      <Image
        style={{ width: dim, height: dim }}
        source={imgSrc}
        resizeMode={"cover"}
      />
    </View>
  );
}

export default UserProfileImg;
const styles = StyleSheet.create({
  userImg: {
    overflow: "hidden",
    borderRadius: 1000,
    borderWidth: 1,
    borderColor: Color.primary300,
  },
});
