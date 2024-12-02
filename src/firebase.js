// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAoy1ctpOWRVcBIC_QXaouey9lulvNcncY",
  authDomain: "attendance-8f2a4.firebaseapp.com",
  projectId: "attendance-8f2a4",
  storageBucket: "attendance-8f2a4.appspot.com",
  messagingSenderId: "958885781274",
  appId: "1:958885781274:web:16f7fe4502a1c9f9c5d6a3",
  measurementId: "G-Q8KMWKYJWP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { auth };
