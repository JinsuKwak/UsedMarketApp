import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  useWindowDimensions,
} from "react-native";
import ButtonSign from "../components/UI/ButtonSign";
import { Color } from "../constants/COLOR";
import { Ionicons } from "@expo/vector-icons";

function SignUpScreen({ navigation }) {
  const [userInputEmail, setUserInputEmail] = useState("");
  const [userInputPassward, setUserInputPassward] = useState("");
  const [userInputConfirmPassward, setUserInputConfirmPassward] = useState("");

  function userInputEmailHandler(text) {
    setUserInputEmail(text);
  }
  function userInputPasswardHandler(text) {
    setUserInputPassward(text);
  }
  function userInputConfirmPasswardHandler(text) {
    setUserInputConfirmPassward(text);
  }

  const { width, height } = useWindowDimensions();
  const inputsContainerHeight = { height: (height * 40) / 100 };

  function signUpHandler() {
    navigation.navigate("LogIn");
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

        <View style={styles.inputBox}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              autoCapitalize="none"
              autoCorrect={false}
              placeholderTextColor="#aaa"
              secureTextEntry={true}
              selectionColor={Color.primary500}
              onChangeText={userInputConfirmPasswardHandler}
              value={userInputConfirmPassward}

              // onChangeText={(text) => onChangeText(text)}
              // value={value}
              // style={{ borderBottomWidth: 2 }}
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
          title={"Sign Up"}
          color={Color.primary500}
          onPress={signUpHandler}
        />
      </View>
    </View>
  );
}

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.primary100,
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
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    minHeight: 300,
    // maxHeight: 300,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: Color.accentLight,
  },
});
