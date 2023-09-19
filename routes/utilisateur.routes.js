const express=require('express');
const { setUtilisateurs, getUtilisateurs, editUtilisateur, deleteUtilisateur } = require('../controllers/utilisateur.controller');
const router = express.Router();

router.get('/',getUtilisateurs);
router.post('/',setUtilisateurs);
router.put('/:id',editUtilisateur);
router.delete('/:id',deleteUtilisateur);

module.exports=router;