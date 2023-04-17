import { initializeApp } from "firebase/app";

let firebaseApp = null;
if (!firebaseApp) {
  const firebaseConfig = {
    apiKey: "AIzaSyDVTYrcm0t17mpe7kvhM7iNuwLOv6TGiCY",
    authDomain: "brickbin.firebaseapp.com",
    projectId: "brickbin",
    storageBucket: "brickbin.appspot.com",
    messagingSenderId: "583237133143",
    appId: "1:583237133143:web:b75a4be211c882b88b9412",
    measurementId: "G-99Y9S09ZDK",
  };
  firebaseApp = initializeApp(firebaseConfig);
}

// Initialize Firebase
export default firebaseApp;
