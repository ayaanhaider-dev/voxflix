import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCMz9AgT0CmYA39VL6kxtfjWCMkGitAyxQ",
  authDomain: "voxflix-auth.firebaseapp.com",
  projectId: "voxflix-auth",
  storageBucket: "voxflix-auth.appspot.com",
  messagingSenderId: "754501906569",
  appId: "1:754501906569:web:b3e3437ade8fae63df9658",
  measurementId: "G-VHPZGCHV08"
};

export const app = initializeApp(firebaseConfig);
