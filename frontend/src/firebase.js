import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBRF2Z5LH2XH3pV2Vodwu1Wq4KLJgIg4uM",
    authDomain: "digital-library-store.firebaseapp.com",
    projectId: "digital-library-store",
    storageBucket: "digital-library-store.appspot.com",
    messagingSenderId: "923345801824",
    appId: "1:923345801824:web:dc0a4baed8d1ea14bc2905"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app)