const express=require('express');
const app =express();
const { default: mongoose } = require('mongoose');
require('dotenv').config();

const connectDB = require('./config/db');
const port = process.env.PORT;

// connexion à ma bd
connectDB();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.listen(port,(error)=>{
    if(error){
        console.error(error);
    }else{
        console.log(`Serveur en attente de requête au port ${port}`);
    }
});


app.use("/utilisateurs",require("./routes/utilisateur.routes"));




















