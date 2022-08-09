import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
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
import ItemScreen from "./screens/ItemScreen.js";
import ChatRoomScreen from "./screens/ChatRoomScreen.js";
import Map from "./screens/Map.js";
import React from "react";
import { Color } from "./constants/COLOR";
import SearchScreen from "./screens/SearchScreen.js";
import { loggedInUser } from "./data/dummyUserData.js"; //TODO
import { JumpingTransition } from "react-native-reanimated";
import chatRoomScreen from "./screens/ChatRoomScreen.js";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const BottomTabs = createBottomTabNavigator();

export default function App() {
  const [userName, setUserName] = useState("User_1234567");
  const [isLoggedIn, setIsLoggedIn] = useState(false); //TODO
  const loggedInUser1 = loggedInUser; //TODO

  function getHeaderTitle(route) {
    const routeName = getFocusedRouteNameFromRoute(route) ?? "EZMK";
    switch (routeName) {
      case "Explore":
        return "EZMK";
      case "MyProfile":
        return "My profile";
      case "Post":
        return "Post";
      case "Favourites":
        return "Favourites";
      case "Messages":
        return "My Messages";
    }
  }

  function BottomTabsNavigator({ navigation: parentNavigation }) {
    return (
      <BottomTabs.Navigator
        screenOptions={({ navigation }) => ({
          headerStyle: {
            backgroundColor: Color.primary500,
          },
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTintColor: Color.accentLight,

          headerTitleAlign: "center",
          headerShown: true, //BUG
          tabBarActiveTintColor: Color.primary500,
          headerLeft: ({ tintColor }) => (
            <View style={styles.icon}>
              <Ionicons
                name="ios-menu-outline"
                size={24}
                color={tintColor}
                onPress={() => {
                  navigation.toggleDrawer();
                }}
              />
            </View>
          ),
          headerRight: ({ tintColor }) => (
            <View style={styles.icon}>
              <Ionicons
                name="ios-search-outline"
                size={20}
                color={tintColor}
                // onPress={navigation.toggleDrawer()}
                onPress={() => {
                  navigation.navigate("SearchD");
                }}
              />
            </View>
          ),
        })}
      >
        <BottomTabs.Screen
          name="Explore"
          component={ExploreScreen}
          options={({ route, navigation }) => {
            const favourites = loggedInUser1.favourites; //TODO
            route.params = { favorites: favourites };

            return {
              params: favourites,
              title: "EZMK",
              tabBarLabel: "Explore",
              tabBarIcon: function ({ focused, color, size }) {
                if (focused == true) {
                  // parentNavigation.navigate("ExploreD");
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
          options={({ route, navigation }) => {
            return {
              title: "My Profile",
              tabBarLabel: "My Profile",
              tabBarIcon: ({ focused, color, size }) => {
                // if (focused == true) {
                //   parentNavigation.navigate("MyProfileD");
                // }
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
          options={({ route, navigation }) => {
            return {
              title: "Post",
              tabBarLabel: "Post",
              tabBarIcon: ({ focused, color, size }) => {
                // if (focused == true) {
                //   parentNavigation.navigate("PostD");
                // }
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
          options={({ route, navigation }) => {
            return {
              title: "Favourites",
              tabBarLabel: "Favourites",
              tabBarIcon: ({ focused, color, size }) => {
                // if (focused == true) {
                //   parentNavigation.navigate("FavouritesD");
                // }
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
          options={({ route, navigation }) => {
            return {
              title: "My Messages",
              tabBarLabel: "Messages",
              tabBarIcon: ({ focused, color, size }) => {
                // if (focused == true) {
                //   parentNavigation.navigate("MessagesD");
                // }
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
          // headerStyle: {
          //   backgroundColor: Color.primary500,
          // },
          // headerTitleStyle: {
          //   fontWeight: "bold",
          // },
          // headerTintColor: Color.accentLight,

          // headerTitleAlign: "center",

          headerShown: false, //BUG
        })}
      >
        <Drawer.Screen
          name="UserName"
          component={ProfileSettingScreen}
          options={({ route, navigation }) => {
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
          options={({ route, navigation }) => {
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
          options={({ route, navigation }) => {
            return {
              // headerTitle: getHeaderTitle(route), //TODO must copy and paste all drawer screens
              title: "EZMK",
              drawerLabel: "Home",
              drawerIcon: ({ color }) => (
                <Ionicons
                  name="ios-home-outline"
                  size={22}
                  color={Color.primary500}
                />
              ),
            };
          }}
        />
        <Drawer.Screen
          name="SearchD"
          component={SearchScreen}
          options={({ route, navigation }) => {
            return {
              title: "Search",
              drawerLabel: "Search",
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
          options={({ route, navigation }) => {
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
          options={({ route, navigation }) => {
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
          options={({ route, navigation }) => {
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
              options={({ route, navigation }) => {
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
              options={({ route, navigation }) => {
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
            options={({ route, navigation }) => {
              return { title: "Sign Up", headerBackVisible: true };
            }}
          />
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={({ route, navigation }) => {
              return {
                title: "EZMK",
                headerShown: false,
              };
            }}
          />
          <Stack.Screen
            name="Item"
            component={ItemScreen}
            options={({ route, navigation }) => {
              return {
                title: "Item",
                headerShown: false,
              };
            }}
          />
          <Stack.Screen
            name="ChatRoom"
            component={ChatRoomScreen}
            options={({ route, navigation }) => {
              return {
                title: `Chat with ${route.params.userB.userName}`,
                headerShown: true,
                headerBackButtonMenuEnabled: true,
                headerBackVisible: true,
              };
            }}
          />
          <Stack.Screen
            name="Map"
            component={Map}
            options={({ route, navigation }) => {
              return {
                title: route.params.address,
                headerShown: true,
                headerBackButtonMenuEnabled: true,
                headerBackVisible: true,
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

  icon: {
    marginHorizontal: 10,
  },
});
