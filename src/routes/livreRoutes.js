const express = require("express");
const router = express.Router();

const {
    getAllLivres,
    getLivre,
    addLivre,
    editLivre,
    removeLivre
} = require("../controllers/livreController");

// GET tous les livres
router.get("/", getAllLivres);

// GET livre par id
router.get("/:id", getLivre);

// POST ajouter livre
router.post("/", addLivre);

// PUT modifier livre
router.put("/:id", editLivre);

// DELETE supprimer livre
router.delete("/:id", removeLivre);

module.exports = router;