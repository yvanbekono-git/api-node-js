const utilisateurModel = require('../models/utilisateur.model');


// recuperer les données
module.exports.getUtilisateurs=async (request,response)=>{
    const utilisateurs=await utilisateurModel.find();
    response.status(200).json({utilisateurs:utilisateurs});
}

// enregistrer les données
module.exports.setUtilisateurs= async (request,response)=>{
    if (!request.body.noms) {
        response.status(400).json({message:"Merci d'ajouter un nom"})
    }

    const utilisateur = await utilisateurModel.create({
        noms:request.body.noms,
        adresse:request.body.adresse,
        telephones:request.body.telephone
    });

    response.status(200).json({message:"Utilisateur ajouté avec succès !"})

}

// modifier les données
module.exports.editUtilisateur= async (request,response)=>{
    const utilisateur= await utilisateurModel.findById(request.params.id);

    if (!utilisateur) {
        response.status(400).json({message:"Utilisateur introuvable !"});
    }

    const updateUtilisateur=await utilisateurModel.findByIdAndUpdate(
        utilisateur,
        request.body,
        {new:true}
    );
    response.status(200).json({updateUtilisateur});
}

//supprimer données
module.exports.deleteUtilisateur= async (request,response)=>{
    const utilisateur = await utilisateurModel.findById(request.params.id);

    if (!utilisateur) {
        response.status(400).json({message:"Utilisateur introuvable !"});
    }

    await utilisateur.deleteOne();

    response.status(200).json({messsage:"Utilisateur supprimé"});
}