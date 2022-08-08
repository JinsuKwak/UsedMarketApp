import Item from "../models/Item";
const itemImgSet1 = [
  "https://images.unsplash.com/photo-1659631559620-934edaad620c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
  "https://images.unsplash.com/photo-1659879003682-839ccc766fd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1659846490270-58b1e659ddc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=606&q=80",
  "https://images.unsplash.com/photo-1659845606908-a8ef6ae0fa6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1011&q=80",
];
const itemImgSet2 = [
  "https://images.unsplash.com/photo-1659886067667-1a5ae2aefeab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  "https://images.unsplash.com/photo-1607100800921-9a0f93e88312?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1659812903205-637a07cbbebc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1659824807787-b80188e28f10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1126&q=80",
];
const itemImgSet3 = [
  "https://images.unsplash.com/photo-1659884535789-539040dbbfeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1659422530627-a2a429733450?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1659777085769-5ae25383f779?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
  "https://images.unsplash.com/photo-1659769262703-9e9fb9c6682c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
];

// itemID,
// owner,
// date,
// location,
//formattedAddress,
// visits,
// itemImgs,
// itemTitle,
// itemDesc,
// itemPrice
const item1 = new Item(
  "ITEMID_1",
  "USERID_2",
  "2022-08-01",
  { lat: 51.136027, lng: -114.203135 },
  "ADD, CA ITEM1",
  1,
  itemImgSet1,
  "title_ID_1 It is a long established fact that a reader will be distracted by the readable",
  "desc_ID_1 content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  11
);

const item2 = new Item(
  "ITEMID_2",
  "USERID_2",
  "2022-08-02",
  { lat: 51.13061933408478, lng: -114.20629289287828 },
  "ADD, CA ITEM2",
  2,
  itemImgSet2,
  "title_ID_2 It is a long established fact that a reader will be ",
  "desc_ID_2 content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
  22
);

const item3 = new Item(
  "ITEMID_3",
  "USERID_3",
  "2022-08-03",
  { lat: 51.01485862984744, lng: -114.06433671518747 },
  "ADD, CA ITEM3",
  3,
  itemImgSet3,
  "title_ID_3 It is a long established fact that ",
  "desc_ID_3 content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  33
);

const item4 = new Item(
  "ITEMID_4",
  "USERID_3",
  "2022-08-04",
  { lat: 43.677734579212114, lng: -79.62558144922653 },
  "ADD, CA ITEM4",
  4,
  itemImgSet1,
  "title_ID_4 It is a long ",
  "desc_ID_4 content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a ",
  44
);

const item5 = new Item(
  "ITEMID_5",
  "USERID_3",
  "2022-08-05",
  { lat: 49.19683149735398, lng: -123.18153375941807 },
  "ADD, CA ITEM5",
  5,
  itemImgSet2,
  "title_ID_5 It is a long established fact that a reader will be distracted by the readable",
  "desc_ID_5 content of a page when looking at its layout.",
  55
);

const item6 = new Item(
  "ITEMID_6",
  "USERID_4",
  "2022-08-06",
  { lat: 49.19683149735398, lng: -123.18153375941807 },
  "ADD, CA ITEM6",
  6,
  itemImgSet3,
  "title_ID_6 It is a ",
  "desc_ID_6 content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  66
);

const item100 = new Item(
  "ITEMID_100",
  "USERID_1",
  "2022-07-01",
  { lat: 37.460446268195206, lng: 126.44068496912335 },
  "ADD, CA ITEM100",
  100,
  itemImgSet1,
  "title_ID_100 It is a long established fact ",
  "desc_ID_100 content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  1100
);

const item101 = new Item(
  "ITEMID_101",
  "USERID_1",
  "2022-07-02",
  { lat: 37.55160789732607, lng: 126.98823316151447 },
  "ADD, CA ITEM101",
  101,
  itemImgSet2,
  "title_ID_101 It is a long established fact that a reader will be distracted by the readable",
  "desc_ID_101 content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using .",
  1101
);

const item102 = new Item(
  "ITEMID_102",
  "USERID_1",
  "2022-07-03",
  { lat: 37.55160789732607, lng: 126.98823316151447 },
  "ADD, CA ITEM102",
  102,
  itemImgSet3,
  "title_ID_102 It is a long established fact that a reader will be distracted by the readable",
  "desc_ID_102 content of a page when ",
  1102
);

const item103 = new Item(
  "ITEMID_103",
  "USERID_1",
  "2022-07-04",
  { lat: 51.07840758187529, lng: -114.13466600169271 },
  "ADD, CA ITEM103",
  103,
  itemImgSet1,
  "title_ID_103 It is a long established fact that a reader will be distracted by the readable",
  "desc_ID_103",
  1103
);

export {
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  item100,
  item101,
  item102,
  item103,
};

export const favItemsUser1 = [item1, item2, item3, item4, item5];
export const listedItemsUser1 = [item100, item101, item102, item103];
export const allItems = [
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  item100,
  item101,
  item102,
  item103,
];
