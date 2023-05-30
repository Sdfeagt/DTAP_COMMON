// TODO: fnuction to update database when realtime database is updated


require('dotenv').config();

const express = require('express');
const cors = require('cors');

// Firebase config
const admin = require("firebase-admin");
const creds = require("./serviceKey.json")
const { getFirestore } = require("firebase-admin/firestore");
// const { getAuth, UserRecord } = require("firebase-admin/auth")


// Initialize Firebase in admin mode
const firebaseApp = admin.initializeApp({
    credential: admin.credential.cert(creds)
});

// // Initialise Firebase auth
// const auth = getAuth(firebaseApp);

// Initialise Express App
const app = express();

app.use(cors());
app.use(express.json());

const db = getFirestore();
const usersRef = db.collection("users");
// const heatmap = db.collection("metrics").doc("heatmap")
const heatmaps = db.collection("heatmaps")
const heatmaps_doc1 = db.collection("heatmaps").doc("heatmap_1")


// get user data from database
app.get("/api/users", async (req, res) => {
    const snapshot= await usersRef.get();
    const userData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    console.log(userData);
    res.send(userData);
})

// get heatmap
app.get("/api/heatmap", async (req, res) => {
    const snapshot= await heatmap.get();
    console.log(snapshot);
    res.send(snapshot);
})

app.get("/api/heatmaps", async (req, res) => {
    const userData = await heatmaps.get();
    res.send(userData);
})

app.get("/api/heatmaps_doc1", async (req, res) => {
    const userData= await heatmaps_doc1.get();
    res.send(userData);
})

// create entry in database
app.post("/api/create", async (req, res) => {
    const data = req.body;
    const newUser = await usersRef.add({ data });
    console.log("User added with ID ", newUser.id);
    res.send({ msg: "User added"});
})

app.post("/api/heatmaps_owner", async (req, res) => {
    await heatmaps_doc1.update({ "owner": "rafalciechanski15@gmail.com" })
    .then( () => {
        console.log("Owner set");
    })
    .catch((err) => {
        console.error("Error adding to firestore", err);
    })

    res.send({msg: "Heatmap initialised"})
})

app.post("/api/init_heatmap_doc1", async (req, res) => {
    // Create a 25 x 25 array of zeroes
    // var heatmap_vals = [0,0,0,0,0,0,0,0,0,0,0,0,98,96,95,0,25,0,0,0,0,0,0,0,0]
    var set_data = {
     '0': [
        70, 70, 67, 0,  0,  0,  0, 0,
        0, 0, 95, 96, 98, 96, 95, 0,
       25, 0, 0, 20, 20, 20, 20, 0,
        0
     ],
     '1': [
        70, 70, 67, 0,  0,  0,  0, 0,
        0, 0, 95, 96, 98, 96, 95, 0,
        0, 0, 0, 0,  0,  0,  0, 0,
        0
     ],
     '2': [
        70, 70, 70, 0,  0,  0,  0, 0,
        0, 0, 94, 96, 98, 96, 95, 0,
        0, 0, 0, 0,  0,  0,  0, 0,
        0
     ],
     '3': [
        0, 0, 0, 0,  0,  0,  0, 0,
        0, 0, 82, 85, 89, 86, 85, 0,
        0, 0, 0, 0,  0,  0,  0, 0,
        0
     ],
     '4': [
        0, 0, 0, 0,  0,  0,  0, 0,
        0, 0, 0, 70, 78, 76, 74, 0,
       25, 0, 0, 0,  0,  0,  0, 0,
        0
     ],
     '5': [
        0, 79, 80, 76, 0,  0,  0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
       54, 50, 0, 0,  0,  0,  0, 0,
        0
     ],
     '6': [
        0, 79, 80, 76, 0,  0,  0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
       54, 50, 0, 0,  0,  0,  0, 0,
        0
     ],
     '7': [
        0, 79, 80, 76, 0,  0,  0, 0,
        79, 80, 76, 0, 9, 16, 15, 0,
       40, 0, 0, 0,  0,  0,  0, 0,
        0
     ],
     '8': [
        0, 0, 0, 0,  0,  0,  0, 0,
        79, 80, 76, 0, 9, 16, 15, 0,
       40, 0, 0, 0,  0,  0,  0, 0,
        0
     ],
     '9': [
        0, 0, 0, 0,  0,  0,  0, 0,
        79, 80, 76, 0, 8, 26, 15, 0,
       25, 0, 0, 0,  0,  0,  0, 0,
        0
     ],
     '10': [
        0, 0, 0, 0,  0,  0,  0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
       0, 0, 0, 0,  0,  0,  0, 0,
        0
     ],
     '11': [
        0, 0, 0, 0,  0,  0,  0, 0,
        0, 0, 0, 0, 98, 96, 95, 0,
       0, 0, 0, 0,  0,  0,  0, 0,
        0
     ],
     '12': [
        0, 0, 0, 0,  0,  0,  0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0,  0,  0,  0, 0,
        0
     ],
     '13': [
        0, 0, 0, 0,  0,  0,  0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 79, 80, 76, 0, 0,
        0
     ],
     '14': [
        0, 0, 0, 79, 80, 76, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 79, 80, 76,  0, 0,
        0
     ],
     '15': [
        0, 0, 0, 79, 80, 76, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 79, 80, 76, 0, 0,
        0
     ],
     '16': [
        0, 0, 0, 79, 80, 76, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 79, 80, 76, 0, 0,
        0
     ],
     '17': [
        0, 0, 0, 79, 80, 76, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0,  0,  0,  0, 0,
        0
     ],
     '18': [
        0, 0, 0, 0,  0,  0,  0, 50,
        70, 70, 0, 0,0, 0, 0, 0,
        0, 60, 60, 60, 0, 0, 0, 0,
        0
     ],
     '19': [
        50, 50, 0, 0, 0, 30, 46, 35,
        70, 70, 0, 0, 0, 0, 0, 0,
        0, 60, 60, 60, 0, 0, 0, 0,
        0
     ],
     '20': [
        50, 49, 0, 0,  0,  0,  0, 0,
        70, 70, 0, 0, 0, 0, 0, 0,
        0, 0, 30, 46, 35, 0,  0, 0,
        0
     ],
     '21': [
        50, 47, 0, 0,  0,  0,  0, 0,
        70, 70, 0, 0, 8, 16, 15, 0,
       0, 0, 30, 46, 35, 0,  0, 0,
        0
     ],
     '22': [
        0, 0, 0, 0,  0,  0,  0, 0,
        99, 0, 0, 0, 28, 36, 35, 0,
       0, 0, 30, 46, 35, 0, 9, 16, 15
     ],
     '23': [
        0, 0, 0, 0,  0,  0,  0, 0,
        0, 0, 0, 0, 30, 46, 35, 0,
       99, 0, 0, 0, 0, 0, 9, 16, 15
     ],
     '24': [
        0, 0, 0, 0,  0,  0,  0, 0,
        0, 0, 0, 0, 28, 46, 45, 0,
       97, 0, 0, 0, 0, 0, 9, 16, 15
     ]
    }

    // for (var i = 0; i < 25; i++) {
    //     set_data[i] = heatmap_vals
    // }
    
    await heatmaps_doc1.update({ data: set_data })
    .then( () => {
        console.log("Set data:", set_data);
    })
    .catch((err) => {
        console.error("Error adding to firestore", err);
    })
    res.send({msg: "Heatmap initialised"})
})

// app.post("/signup", async (req, res) => {
//     // get user data from request
//     const {name, email, password, device_id} = req.body;

//     // create user in Firebase Auth using email and password credentials 
//     await auth.createUser({
//         email: email,
//         emailVerified: true,
//         password: password,
//         displayName: name
//     })
//     .then( (userRecord) => {
//         usersRef.doc(userRecord.uid).set({
//             "name": name,
//             "email": email,
//             "device_id": device_id
//         })
//         console.log("Successfully created new user: ", userRecord.uid);
//         res.send("Sign up successful!")
//     })
//     .catch( (error) => {
//         if (error.code == "auth/email-already-exists") {
//             console.log("Error creating new user: ", error.message)
//             res.send(error.message);
//         } else {
//             console.log("Error creating new user: ", error);
//             res.send(error)
//         }
//     })
// })

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log("[SUCCESS] Server is up and running at port", PORT);
})