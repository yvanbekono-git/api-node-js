const mongoose =require('mongoose');


const utilisateurSchema=mongoose.Schema(
    {
        noms:{
            type:String,
            required:true,
        },
        adresse:{
            type:String,
            required:true
        },
        telephones:{
            type:[String]
        }
    },
    {
        timestamps:true,
    }
);

module.exports=mongoose.model('utilisateurs',utilisateurSchema);