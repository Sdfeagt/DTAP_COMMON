import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, deleteDoc, doc, setDoc, Firestore } from 'firebase/firestore/lite';
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
    const IDs = collection(db, 'device_IDs');
    const IDSnapshot = await getDocs(IDs);
    const IDList = IDSnapshot.docs.map(doc => doc.data());
    return IDList;
}

const auth = getAuth();

async function deleteDocument(collection: string, document: string) {
    await deleteDoc(doc(db, collection, document));
}

async function addDocument(collection: string, ID: string, document: any) {
    console.log(document);
    const docRef = doc(db, collection, ID);
    await setDoc(docRef, document);
}



export { getDevices, getUsers, auth, getIDs, deleteDocument, addDocument }