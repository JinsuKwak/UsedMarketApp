class User {
  constructor(
    userID,
    userName,
    userImg,
    email,
    passward,
    role,
    lastName,
    firstName,
    profileImg,
    listed,
    favourites,
    chatRooms
  ) {
    this.userID = userID;
    this.userName = userName;
    this.userImg = userImg;
    this.email = email;
    this.passward = passward;
    this.role = role;
    this.lastName = lastName;
    this.firstName = firstName;
    this.profileImg = profileImg;
    this.listed = listed;
    this.favourites = favourites;
    this.chatRooms = chatRooms;
  }
}
export default User;
