import React, { useState, useEffect } from "react";
import {
  Pressable,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { Color } from "../../constants/COLOR";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function ButtonMessage({ userB }) {
  const navigation = useNavigation();

  function onPressHandler() {
    navigation.navigate("ChatRoom", { userB: userB });
  }

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={onPressHandler}>
        <View style={styles.iconContainer}>
          <Ionicons
            name="ios-chatbubble-sharp"
            size={28}
            color={Color.primary500}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default ButtonMessage;
const styles = StyleSheet.create({
  buttonContainer: {},
  iconContainer: {
    height: 60,
    width: 60,
    borderRadius: 1000,
    // borderWidth: 1,
    // borderColor: Color.primary300,
    justifyContent: "center",
    alignItems: "center",
  },
});
