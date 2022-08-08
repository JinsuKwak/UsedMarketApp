class Item {
  constructor(
    itemID,
    owner,
    date,
    location,
    formattedAddress,
    visits,
    itemImgs,
    itemTitle,
    itemDesc,
    itemPrice
  ) {
    this.itemID = itemID;
    this.owner = owner;
    this.date = date;
    this.location = location;
    this.formattedAddress = formattedAddress;
    this.visits = visits;
    this.itemImgs = itemImgs;
    this.itemTitle = itemTitle;
    this.itemDesc = itemDesc;
    this.itemPrice = itemPrice;
  }
}

export default Item;
