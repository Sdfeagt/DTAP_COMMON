require('dotenv').config();

const express = require('express');
const cors = require('cors');

// Firebase config
const admin = require("firebase-admin");
const creds = require("./serviceKey.json")
const { getFirestore } = require("firebase-admin/firestore");
const { getAuth, UserRecord } = require("firebase-admin/auth")


// Initialize Firebase in admin mode
const firebaseApp = admin.initializeApp({
    credential: admin.credential.cert(creds)
});

// Initialise Firebase auth
const auth = getAuth(firebaseApp);

// Initialise Express App
const app = express();

app.use(cors());
app.use(express.json());

const db = getFirestore();
const usersRef = db.collection("users");

// read data from database
app.get("/api", async (req, res) => {
    const snapshot= await usersRef.get();
    const userData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    console.log(userData);
    res.send(userData);
})

// create entry in database
app.post("/api/create", async (req, res) => {
    const data = req.body;
    const newUser = await usersRef.add({ data });
    console.log("User added with ID ", newUser.id);
    res.send({ msg: "User added"});
})

app.post("/signup", async (req, res) => {
    // get user data from request
    const {name, email, password, device_id} = req.body;

    // create user in Firebase Auth using email and password credentials 
    await auth.createUser({
        email: email,
        emailVerified: true,
        password: password,
        displayName: name
    })
    .then( (userRecord) => {
        usersRef.doc(userRecord.uid).set({
            "name": name,
            "email": email,
            "device_id": device_id
        })
        console.log("Successfully created new user: ", userRecord.uid);
        res.send("Sign up successful!")
    })
    .catch( (error) => {
        if (error.code == "auth/email-already-exists") {
            console.log("Error creating new user: ", error.message)
            res.send(error.message);
        } else {
            console.log("Error creating new user: ", error);
            res.send(error)
        }
    })
})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log("[SUCCESS] Server is up and running at port ", PORT);
})