// cardData.js

const urlList = [
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  ''
];
const randomIndex = Math.floor(Math.random() * urlList.length);
const randomIndex1 = Math.floor(Math.random() * urlList.length);
const randomIndex2 = Math.floor(Math.random() * urlList.length);
const randomIndex3 = Math.floor(Math.random() * urlList.length);
const randomIndex4 = Math.floor(Math.random() * urlList.length);


const DataProfile = [
  { id: 1, imgSrc: undefined, name: "Jane Doe", tel: "555-5678" },
];

if (DataProfile[0].imgSrc === undefined) {
  DataProfile[0].imgSrc = urlList[randomIndex];
}


export default DataProfile;