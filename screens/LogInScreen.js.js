import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import ButtonSign from "../components/UI/ButtonSign";
import { Color } from "../constants/COLOR";
import { Ionicons } from "@expo/vector-icons";

function LogInScreen({ navigation }) {
  const [userInputEmail, setUserInputEmail] = useState("");
  const [userInputPassward, setUserInputPassward] = useState("");

  const { width, height } = useWindowDimensions();
  const inputsContainerHeight = { height: (height * 30) / 100 };

  function signInHandler() {
    navigation.navigate("Drawer");
  }

  function userInputEmailHandler(text) {
    setUserInputEmail(text);
  }

  function userInputPasswardHandler(text) {
    setUserInputPassward(text);
  }

  return (
    <View style={styles.inputBackgroundContainer}>
      <View style={[styles.inputsContainer, inputsContainerHeight]}>
        <View style={styles.inputBox}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              autoCapitalize="none"
              autoCorrect={false}
              placeholderTextColor="#aaa"
              selectionColor={Color.primary500}
              onChangeText={userInputEmailHandler}
              value={userInputEmail}
            />
          </View>
          <View style={styles.inputIconContainer}>
            <Ionicons
              name="ios-mail-outline"
              size={22}
              color={Color.primary500}
            />
          </View>
        </View>
        <View style={styles.inputBox}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              autoCapitalize="none"
              autoCorrect={false}
              placeholderTextColor="#aaa"
              secureTextEntry={true}
              selectionColor={Color.primary500}
              onChangeText={userInputPasswardHandler}
              value={userInputPassward}
            />
          </View>
          <View style={styles.inputIconContainer}>
            <Ionicons
              name="ios-lock-closed-outline"
              size={22}
              color={Color.primary500}
            />
          </View>
        </View>

        <ButtonSign
          title={"Sign in"}
          color={Color.primary500}
          onPress={signInHandler}
        />
      </View>
    </View>
  );
}

export default LogInScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 13,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    borderBottomColor: Color.primary500,
    borderBottomWidth: 1,
    height: 26,
    marginBottom: 0,
    flex: 1,
  },
  inputIconContainer: {
    borderBottomColor: Color.primary500,
    borderBottomWidth: 1,
    height: 26,
    marginBottom: 0,
  },
  input: {
    flex: 1,
    height: 26,
    fontSize: 14,
  },
  inputBox: {
    flexDirection: "row",
    width: "95%",
  },

  inputBackgroundContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: Color.primary100,
  },
  inputsContainer: {
    justifySelf: "flex-end",
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    minHeight: 250,

    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: Color.accentLight,
  },
});
