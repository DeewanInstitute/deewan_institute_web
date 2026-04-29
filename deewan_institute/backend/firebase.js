require('dotenv').config();  // Load .env first!

const admin = require("firebase-admin");
const path = require('path');
const serviceAccount = require(process.env.FIREBASE_PRIVATE_KEY_PATH);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,  
});

const db = admin.firestore();
const bucket = admin.storage().bucket();

console.log(`✅ Connected to bucket: ${bucket.name}`);

module.exports = { admin, db, bucket };