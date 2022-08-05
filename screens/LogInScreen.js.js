import React from "react";
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

function LogInScreen({ navigation }) {
  const { width, height } = useWindowDimensions();
  const inputsContainerHeight = { height: (height * 30) / 100 };

  function signInHandler() {
    navigation.navigate("Drawer");
  }

  return (
    <React.Fragment>
      <View style={styles.container}></View>
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

                // onChangeText={(text) => onChangeText(text)}
                // value={value}
                // style={{ borderBottomWidth: 2 }}
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
            title={"Sign in"}
            color={Color.primary500}
            onPress={signInHandler}
          />
        </View>
      </View>
    </React.Fragment>
  );
}

export default LogInScreen;
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
    backgroundColor: Color.primary100,
  },
  inputsContainer: {
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    minHeight: 250,

    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: Color.accentLight,
  },
});
