import React, { useEffect, useState } from "react";
import {
  Pressable,
  StyleSheet,
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import * as Clipboard from "expo-clipboard";
import { Color } from "../../constants/COLOR";
import { getAddress } from "../../utill/LOCATION";

const btnWidth = 130;

function ButtonCopyAddress({ location }) {
  const [copiedAddress, setCopiedAddress] = useState("");
  const { width, height } = useWindowDimensions();
  const coordinate = Math.floor(width - width / 2 - btnWidth / 2);

  useEffect(() => {
    async function copyToClipboard(copiedAddress) {
      await Clipboard.setStringAsync(copiedAddress);
    }
    copyToClipboard(copiedAddress);
  }, [copiedAddress]);

  function onPressHandler() {
    async function handleLocation() {
      if (location && copiedAddress === "") {
        const address = await getAddress(
          location.lat,
          location.lng,
          "fullAddress"
        );
        setCopiedAddress(address);
      }
    }

    handleLocation();
  }

  return (
    <View
      style={[
        styles.btnContainer,
        {
          backgroundColor:
            copiedAddress === "" ? Color.primary500 : Color.primary300,
          position: "absolute",
          top: "3%",
          left: coordinate,
        },
      ]}
    >
      <TouchableOpacity onPress={onPressHandler}>
        <View style={styles.innerContiner}>
          <Text style={styles.btnText}>
            {copiedAddress === "" ? "Copy address" : "Address copied"}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default ButtonCopyAddress;
const styles = StyleSheet.create({
  btnContainer: {
    height: 50,
    width: btnWidth,
    borderRadius: 500,
  },

  innerContiner: {
    height: 50,
    width: btnWidth,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 6,
    borderRadius: 500,
  },

  btnText: {
    fontSize: 14,
    color: Color.accentLight,
    fontWeight: "500",
  },
});
