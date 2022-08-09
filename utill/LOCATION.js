const GOOGLE_API_KEY = "AIzaSyBMrlZfcz908pBsZ56qPB3YTVE39hVyvY0";

export function getMapPreview(lat, lng) {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&szie=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&Key=${GOOGLE_API_KEY}`;
  return imagePreviewUri;
}

export async function getAddress(lat, lng, option) {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch address!");
  }

  const data = await response.json();
  const address = data.results[0].address_components;
  console.log("getAddress API");

  switch (option) {
    case "fullAddress":
      // console.log(data.results[0].formatted_addresss);
      return data.results[0]?.formatted_address;

    case "postalCode":
      return `${address[3]?.long_name ?? ""}, ${
        address[4]?.short_name ?? ""
      }  ${address[6]?.long_name ?? ""}`;

    case "short":
      return `${address[3]?.long_name ?? ""}, ${address[4]?.short_name ?? ""}`;

    default:
      return `${address[3]?.long_name ?? ""}, ${address[4]?.short_name ?? ""}`;
  }
}
