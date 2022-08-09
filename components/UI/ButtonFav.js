import React, { useState, useEffect } from "react";
import { Pressable, StyleSheet, TouchableOpacity } from "react-native";
import { Color } from "../../constants/COLOR";
import { Ionicons } from "@expo/vector-icons";

function ButtonFav({ itemID, fav }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(fav.some((fav) => fav === itemID));
  }, [fav]); //TODO idk

  function favClickHandler() {
    setIsFavorite((currState) => !currState);
    //TODO update user's fav list
  }

  return (
    <TouchableOpacity onPress={favClickHandler} activeOpacity={0.5}>
      <Ionicons
        name={`ios-heart-${isFavorite ? "sharp" : "outline"}`}
        size={22}
        color={isFavorite ? Color.primary500 : Color.accentDark300}
      />
    </TouchableOpacity>
  );
}

export default ButtonFav;
const styles = StyleSheet.create({});
