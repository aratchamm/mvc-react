

const urlList = [
  'https://sv1.picz.in.th/images/2023/05/02/yjoLID.jpg',
  'https://sv1.picz.in.th/images/2023/05/02/yjoLID.jpg',
  'https://sv1.picz.in.th/images/2023/05/02/yjoLID.jpg',
  'https://sv1.picz.in.th/images/2023/05/02/yjoLID.jpg'
];
const randomIndex = Math.floor(Math.random() * urlList.length);
const randomUrl = urlList[randomIndex];

const CardData = [
  { 
    id: 1,
    Header: 'fsa',
    imgRiderSrc: randomUrl,
    imgCilentSrc: "https://sv1.picz.in.th/images/2023/05/03/yjef5a.jpg",
    imgCilentSrc2: undefined 
  }


];

  
  
  export default CardData;