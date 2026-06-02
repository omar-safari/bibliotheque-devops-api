const {
    getLivres,
    getLivreById,
    createLivre,
    updateLivre,
    deleteLivre
} = require("../services/livreService");


const getAllLivres = async (req, res) => {
    try {
        const livres = await getLivres();
        res.json(livres);
    } catch (error) {
        res.status(500).json({
            message: "Erreur lors de la récupération des livres",
            error: error.message
        });
    }
};

const getLivre = async (req, res) => {
    try {
        const livre = await getLivreById(req.params.id);

        if (!livre) {
            return res.status(404).json({
                message: "Livre non trouvé"
            });
        }

        res.json(livre);
    } catch (error) {
        res.status(500).json({
            message: "Erreur",
            error: error.message
        });
    }
};

const addLivre = async (req, res) => {
    try {
        const { titre, auteur, annee_publication } = req.body;

        const nouveauLivre = await createLivre(
            titre,
            auteur,
            annee_publication
        );

        res.status(201).json(nouveauLivre);
    } catch (error) {
        res.status(500).json({
            message: "Erreur lors de l'ajout",
            error: error.message
        });
    }
};
const editLivre = async (req, res) => {
    try {
        const { titre, auteur, annee_publication } = req.body;

        const livre = await updateLivre(
            req.params.id,
            titre,
            auteur,
            annee_publication
        );

        if (!livre) {
            return res.status(404).json({
                message: "Livre non trouvé"
            });
        }

        res.json(livre);

    } catch (error) {
        res.status(500).json({
            message: "Erreur lors de la modification",
            error: error.message
        });
    }
};

const removeLivre = async (req, res) => {
    try {
        const livre = await deleteLivre(req.params.id);

        if (!livre) {
            return res.status(404).json({
                message: "Livre non trouvé"
            });
        }

        res.json({
            message: "Livre supprimé",
            livre
        });

    } catch (error) {
        res.status(500).json({
            message: "Erreur lors de la suppression",
            error: error.message
        });
    }
};
module.exports = {
    getAllLivres,
    getLivre,
    addLivre,
    editLivre,
    removeLivre
};  