import User from "../models/User";
import Item from "../models/Item";

// userID,
// userName
// email,
// passward,
// role,
// lastName,
// firstName,
// profileImg,
// listed,
// favourites,
// chatRooms

export const loggedInUser = new User(
  "USERID_1",
  "UserName_1",
  "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
  "loggedUser@gmail.com",
  "PWlogged",
  0,
  "LNlogged",
  "FNlogged",
  "../assets/icon.png",
  ["ITEMID_100", "ITEMID_101", "ITEMID_102", "ITEMID_103"],
  ["ITEMID_1", "ITEMID_2", "ITEMID_3", "ITEMID_4", "ITEMID_5"],
  ["CR12", "CR13"]
);

export const user2 = new User(
  "USERID_2",
  "UserName_2",
  "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1195&q=80",
  "User2@gmail.com",
  "PWlogged",
  0,
  "LNlogged",
  "FNlogged",
  "../assets/icon.png",
  ["ITEMID_1", "ITEMID_2"],
  ["ITEMID_100", "ITEMID_101", "ITEMID_6"],
  ["CR12", "CR24"]
);

export const user3 = new User(
  "USERID_3",
  "UserName_3",
  "https://images.unsplash.com/photo-1616766098946-e4fabb7d6da0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "User3@gmail.com",
  "PWlogged",
  0,
  "LNlogged",
  "FNlogged",
  "../assets/icon.png",
  ["ITEMID_3", "ITEMID_4", "ITEMID_5"],
  ["ITEMID_102", "ITEMID_103"],
  ["CR12"]
);

export const user4 = new User(
  "USERID_4",
  "UserName_4",
  "",
  "User4@gmail.com",
  "PWlogged",
  0,
  "LNlogged",
  "FNlogged",
  "../assets/icon.png",
  ["ITEMID_6"],
  ["ITEMID_102", "ITEMID_103"],
  ["CR24"]
);
