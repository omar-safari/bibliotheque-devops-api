const { getLivres } = require("../services/livreService");

const getAllLivres = (req, res) => {
    const livres = getLivres();
    res.json(livres);
};

module.exports = {
    getAllLivres
};