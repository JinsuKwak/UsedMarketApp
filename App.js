import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LogInScreen from "./screens/LogInScreen.js";
import SignUpScreen from "./screens/SignUpScreen";
import ExploreScreen from "./screens/ExploreScreen";
import SignInRequireScreen from "./screens/SignInRequireScreen";
import MyProfileScreen from "./screens/MyProfileScreen";
import ProfileSettingScreen from "./screens/ProfileSettingScreen";
import FavouritesScreen from "./screens/FavouritesScreen.js";
import Listings from "./screens/Listings.js";
import MessagesScreen from "./screens/MessagesScreen.js";
import PostScreen from "./screens/PostScreen.js";
import React from "react";
import { Color } from "./constants/COLOR";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const BottomTabs = createBottomTabNavigator();

export default function App() {
  const [userName, setUserName] = useState("User_1234567");
  const [isLoggedIn, setIsLoggedIn] = useState(false); //TODO

  function BottomTabsNavigator({ navigation: parentNavigation }) {
    return (
      <BottomTabs.Navigator
        screenOptions={({ navigation }) => ({
          headerShown: false,
          tabBarActiveTintColor: Color.primary500,
        })}
      >
        <BottomTabs.Screen
          name="Explore"
          component={ExploreScreen}
          options={({ rounte, navigation }) => {
            return {
              title: "Explore",
              tabBarLabel: "Explore",
              tabBarIcon: function ({ focused, color, size }) {
                if (focused == true) {
                  return (
                    <Ionicons name="ios-search-sharp" size={22} color={color} />
                  );
                } else {
                  return (
                    <Ionicons
                      name="ios-search-outline"
                      size={22}
                      color={color}
                    />
                  );
                }
              },
            };
          }}
        />
        <BottomTabs.Screen
          name="MyProfile"
          component={MyProfileScreen}
          options={({ rounte, navigation }) => {
            return {
              title: "My Profile",
              tabBarLabel: "My Profile",
              tabBarIcon: ({ focused, color, size }) => {
                let type = focused == true ? "sharp" : "outline";
                return (
                  <Ionicons
                    name={`ios-person-${type}`}
                    size={22}
                    color={color}
                  />
                );
              },
            };
          }}
        />
        <BottomTabs.Screen
          name="Post"
          component={PostScreen}
          options={({ rounte, navigation }) => {
            return {
              title: "Post",
              tabBarLabel: "Post",
              tabBarIcon: ({ focused, color, size }) => {
                let type = focused == true ? "sharp" : "outline";
                return (
                  <Ionicons
                    name={`ios-camera-${type}`}
                    size={22}
                    color={color}
                  />
                );
              },
            };
          }}
        />
        <BottomTabs.Screen
          name="Favourites"
          component={FavouritesScreen}
          options={({ rounte, navigation }) => {
            return {
              title: "Favourites",
              tabBarLabel: "Favourites",
              tabBarIcon: ({ focused, color, size }) => {
                let type = focused == true ? "sharp" : "outline";
                return (
                  <Ionicons
                    name={`ios-heart-${type}`}
                    size={22}
                    color={color}
                  />
                );
              },
            };
          }}
        />
        <BottomTabs.Screen
          name="Messages"
          component={MessagesScreen}
          options={({ rounte, navigation }) => {
            return {
              title: "My Messages",
              tabBarLabel: "Messages",
              tabBarIcon: ({ focused, color, size }) => {
                let type = focused == true ? "sharp" : "outline";
                return (
                  <Ionicons
                    name={`ios-chatbubble-${type}`}
                    size={22}
                    color={color}
                  />
                );
              },
            };
          }}
        />
      </BottomTabs.Navigator>
    );
  }

  function DrawerNavigator() {
    return (
      <Drawer.Navigator
        initialRouteName="ExploreD"
        screenOptions={({ navigation }) => ({
          drawerStyle: {
            backgroundColor: Color.accentLight,
            width: "80%",
          },
          drawerActiveTintColor: Color.primary500,
          drawerActiveBackgroundColor: Color.primary0,
          drawerType: "front",
          headerStyle: {
            backgroundColor: Color.primary500,
          },
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTintColor: Color.accentLight,

          headerTitleAlign: "center",
        })}
      >
        <Drawer.Screen
          name="UserName"
          component={ProfileSettingScreen}
          options={({ rounte, navigation }) => {
            return {
              title: `${userName}'s EZMK`,
              drawerLabelStyle: {
                color: Color.accentDark,
                fontSize: 18,
                fontWeight: "bold",
              },
            };
          }}
        />
        <Drawer.Screen
          name="MyProfileD"
          component={BottomTabsNavigator}
          options={({ rounte, navigation }) => {
            return {
              title: "My Profile",
              drawerLabel: "My Profile",
              drawerIcon: ({ color }) => (
                <Ionicons
                  name="ios-person-outline"
                  size={22}
                  color={Color.primary500}
                />
              ),
            };
          }}
        />
        <Drawer.Screen
          name="ExploreD"
          component={BottomTabsNavigator}
          options={({ rounte, navigation }) => {
            return {
              title: "EZMK",
              drawerLabel: "Home",
              drawerIcon: ({ color }) => (
                <Ionicons
                  name="ios-search-outline"
                  size={22}
                  color={Color.primary500}
                />
              ),
            };
          }}
        />
        <Drawer.Screen
          name="PostD"
          component={BottomTabsNavigator}
          options={({ rounte, navigation }) => {
            return {
              title: "Post",
              drawerLabel: "Post",
              drawerIcon: ({ color }) => (
                <Ionicons
                  name="ios-camera-outline"
                  size={22}
                  color={Color.primary500}
                />
              ),
            };
          }}
        />
        <Drawer.Screen
          name="MessagesD"
          component={BottomTabsNavigator}
          options={({ rounte, navigation }) => {
            return {
              title: "My Messages",
              drawerLabel: "My Messages",
              drawerIcon: ({ color }) => (
                <Ionicons
                  name="ios-chatbubble-outline"
                  size={22}
                  color={Color.primary500}
                />
              ),
            };
          }}
        />
        <Drawer.Screen
          name="FavouritesD"
          component={BottomTabsNavigator}
          options={({ rounte, navigation }) => {
            return {
              title: "Favourites",
              drawerLabel: "Favourites",
              drawerIcon: ({ color }) => (
                <Ionicons
                  name="ios-heart-outline"
                  size={22}
                  color={Color.primary500}
                />
              ),
            };
          }}
        />
      </Drawer.Navigator>
    );
  }

  return (
    <React.Fragment>
      <StatusBar style="light"></StatusBar>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={({ navigation }) => ({
            headerStyle: {
              backgroundColor: Color.primary500,
            },
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTintColor: Color.accentLight,
            headerBackButtonMenuEnabled: false,
            headerBackVisible: false, //TODO temp need false req
            headerBackTitleVisible: false,
            headerTitleAlign: "center",
          })}
        >
          {isLoggedIn ? (
            <Stack.Screen
              name="DrawerLoggedIn"
              component={DrawerNavigator}
              options={({ rounte, navigation }) => {
                return {
                  title: "EZMK",
                  headerShown: false,
                };
              }}
            />
          ) : (
            <Stack.Screen
              name="LogIn"
              component={LogInScreen}
              options={({ rounte, navigation }) => {
                return {
                  title: "EZMK",
                  headerRight: () => (
                    <Text
                      style={styles.headerOptions}
                      onPress={() => {
                        navigation.navigate("SignUp");
                      }}
                    >
                      Sign up
                    </Text>
                  ),
                  headerLeft: () => (
                    <Text
                      style={styles.headerOptions}
                      onPress={() => {
                        navigation.navigate("Drawer");
                      }}
                    >
                      Skip
                    </Text>
                  ),
                };
              }}
            />
          )}
          <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
            options={({ rounte, navigation }) => {
              return { title: "Sign Up", headerBackVisible: true };
            }}
          />
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={({ rounte, navigation }) => {
              return {
                title: "EZMK",
                headerShown: false,
              };
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  headerOptions: {
    fontWeight: "bold",
    color: Color.accentLight,
    padding: 0,
  },
});
