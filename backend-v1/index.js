// import firebase from "./config"

require('dotenv').config();

const express = require('express');
const cors = require('cors');

// firebase config
// const { initializeApp } = require("firebase-admin/app")
const admin = require("firebase-admin");
const creds = require("./serviceKey.json")
const { getFirestore } = require('firebase-admin/firestore');

// const firebaseConfig = {
//     apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//     authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
// };

// Initialize Firebase
// const firebaseApp = admin.initializeApp(firebaseConfig);
const firebaseApp = admin.initializeApp({
    credential: admin.credential.cert(creds)
});

// const firebase = require("./Firebase/firebaseApp");

const app = express();

app.use(cors());
app.use(express.json());

const db = getFirestore();
const usersRef = db.collection('users');

app.get("/", async (req, res) => {
    const snapshot= await usersRef.get();
    // const snapshot = await getDocs(collection(db, 'users'))
    const userData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    console.log(userData)
    res.send(userData)
})

app.post("/api/create", async (req, res) => {
    const data = req.body;
    console.log("User added with ID ", data.id);
    delete data.id
    const newUser = await usersRef.add({ data });
    // const newUser = await setDoc(doc(db, 'users', data.id), data )
    res.send({ msg: "User added"});
})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log("[SUCCESS] Server is up and running at port ", PORT)
})