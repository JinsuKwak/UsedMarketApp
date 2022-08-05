import React from "react";
import { Pressable, View, Text, StyleSheet, Platform } from "react-native";
import { Color } from "../../constants/COLOR";

function ButtonSign({ title, color, onPress }) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        android_ripple={{ color: "#000" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default ButtonSign;
const styles = StyleSheet.create({
  buttonContainer: {
    margin: 16,
    width: "95%",
    height: 50,
    borderRadius: 10,
    elevation: 4,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerContainer: {
    flex: 1,
    padding: 12,
    borderRadius: 10,

    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.85,
  },
  title: {
    color: Color.accentLight,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    alignContent: "center",
  },
});
