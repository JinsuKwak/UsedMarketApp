import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ButtonFav from "./ButtonFav";
import FormattedLocation from "./FormattedLocation";
import { Color } from "../../constants/COLOR";
import UserProfileImg from "./UserProfileImg";
import ButtonMessage from "./ButtonMessage";
import { loggedInUser, user2, user3, user4 } from "../../data/dummyUserData"; //TODO

function ItemOwnerInfo({ ownerBUG }) {
  //TODO DB req to find owner (assume user2 as owner)
  const owner = user2;
  const userName = owner?.userName ? owner.userName : "EZMK User";

  return (
    <View style={styles.ownerContainer}>
      <View style={styles.ownerInfoContainer}>
        <View style={styles.userProfileContainer}>
          <UserProfileImg dim={60} userID={owner.userID} />
        </View>
        <View style={styles.userNameContainer}>
          <Text
            ellipsizeMode="tail"
            numberOfLines={1}
            style={{ width: 120, height: 20, fontSize: 16, fontWeight: "500" }}
          >
            {userName}
          </Text>
        </View>
      </View>
      <View style={styles.ownerContactContainer}>
        <ButtonMessage userB={owner} />
      </View>
    </View>
  );
}

export default ItemOwnerInfo;
const styles = StyleSheet.create({
  ownerContainer: {
    padding: 16,
    flex: 1,
    height: 92,
    backgroundColor: Color.accentLight,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 1,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 1,
  },

  ownerInfoContainer: {
    flex: 1,
    flexDirection: "row",
    // alignItems: "center",
  },

  userNameContainer: {
    padding: 10,
    flex: 1,
    justifyItems: "center",
  },

  ownerContactContainer: {},
});
