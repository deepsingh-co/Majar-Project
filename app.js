const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Listing = require('./models/listing.js');

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main().then(() =>{
    console.log("Connected to MongoDB");
})
.catch((err) =>{
    console.error("Error connecting to MongoDB:", err);
});

async function main(){
    await mongoose.connect(MONGO_URL);
}

app.get('/', (req , res) =>{
    res.send("Hii , I am A Root");
});

app.get("/testlistings", async (req, res) => {
    let sampleListing = new Listing({
        title: "Beautiful Beach House",
        description: "A stunning beach house with ocean views and modern amenities.",
        price: 250,
        location: "Malibu",
        country: "INDIA",
    });


    await sampleListing.save();
    console.log("Sample listing saved to the database");
    res.send("successfull saved");

});

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});