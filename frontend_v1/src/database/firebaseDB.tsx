import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, Firestore } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSENGER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getDevices() {
    const devicesMetrics = collection(db, 'metrics');
    const devicesSnapshot = await getDocs(devicesMetrics);
    const devicesList = devicesSnapshot.docs.map(doc => doc.data());
    return devicesList;
}

async function getUsers() {
    const users = collection(db, 'users');
    const usersSnapshot = await getDocs(users);
    const usersList = usersSnapshot.docs.map(doc => doc.data());
    return usersList;
}

async function getIDs() {
    const IDs = collection(db, 'devices_ID');
    const IDSnapshot = await getDocs(IDs);
    const IDList = IDSnapshot.docs.map(doc => doc.data());
    return IDList;
}

const auth = getAuth();


export { getDevices, getUsers, auth, getIDs }