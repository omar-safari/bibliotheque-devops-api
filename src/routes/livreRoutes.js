const express = require("express");
const router = express.Router();

const {
    getAllLivres
} = require("../controllers/livreController");

router.get("/", getAllLivres);

module.exports = router;