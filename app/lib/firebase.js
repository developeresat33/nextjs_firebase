// app/firebase.js

// Firebase SDK'sını ekleyin
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, query, where, getDocs, doc, deleteDoc } from "firebase/firestore";

// Firebase yapılandırması
const firebaseConfig = {
    apiKey: "AIzaSyCX5LK9GiNZ6R0K55iuP28lTzE5apZ5kL4",
    authDomain: "dashboardtest-ce301.firebaseapp.com",
    databaseURL: "https://dashboardtest-ce301-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "dashboardtest-ce301",
    storageBucket: "dashboardtest-ce301.appspot.com",
    messagingSenderId: "714312798055",
    appId: "1:714312798055:web:6f1bfc1d4d6323042fe9c2",
    measurementId: "G-N2GR41BNS0"
};

// Firebase'i başlatın
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export edilen değişkenler
export { db, collection, addDoc, query, where, getDocs, doc, deleteDoc };
