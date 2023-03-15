require('dotenv').config();

const express = require('express');
const cors = require('cors');

// Firebase config
const admin = require("firebase-admin");
const creds = require("./serviceKey.json")
const { getFirestore } = require('firebase-admin/firestore');


// Initialize Firebase in admin mode
const firebaseApp = admin.initializeApp({
    credential: admin.credential.cert(creds)
});

// Initialise Express App
const app = express();


app.use(cors());
app.use(express.json());

const db = getFirestore();
const usersRef = db.collection('users');

app.get("/api", async (req, res) => {
    const snapshot= await usersRef.get();
    const userData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    console.log(userData)
    res.send(userData)
})

app.post("/api/create", async (req, res) => {
    const data = req.body;
    const newUser = await usersRef.add({ data });
    console.log("User added with ID ", newUser.id);
    res.send({ msg: "User added"});
})


const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log("[SUCCESS] Server is up and running at port ", PORT)
})