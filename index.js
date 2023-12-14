import { Livepeer } from "livepeer";

const apiKey = 'API_KEY_HERE'; // Replace with your API key
const fileName = 'testvideo.mp4'; // Replace with the desired file name

const livepeer = new Livepeer(apiKey);

const assetData = {
  name: fileName
};

livepeer
  .requestAssetUpload(assetData)
  .then((response) => {
    console.log("Asset upload request:", response);
  })
  .catch((error) => {
    console.error("Error requesting asset upload:", error);
  });