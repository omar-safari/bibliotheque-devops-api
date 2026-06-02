const pool = require("../config/database");

const getLivres = async () => {
    const result = await pool.query("SELECT * FROM livres ORDER BY id");
    return result.rows;
};
const getLivreById = async (id) => {
    const result = await pool.query(
        "SELECT * FROM livres WHERE id = $1",
        [id]
    );

    return result.rows[0];
};
const createLivre = async (titre, auteur, annee_publication) => {
    const result = await pool.query(
        `INSERT INTO livres (titre, auteur, annee_publication)
         VALUES ($1, $2, $3)
         RETURNING *`,
        [titre, auteur, annee_publication]
    );

    return result.rows[0];
};
const updateLivre = async (id, titre, auteur, annee_publication) => {
    const result = await pool.query(
        `UPDATE livres
         SET titre = $1,
             auteur = $2,
             annee_publication = $3
         WHERE id = $4
         RETURNING *`,
        [titre, auteur, annee_publication, id]
    );

    return result.rows[0];
};

const deleteLivre = async (id) => {
    const result = await pool.query(
        "DELETE FROM livres WHERE id = $1 RETURNING *",
        [id]
    );

    return result.rows[0];
};
module.exports = {
    getLivres,
    getLivreById,
    createLivre,
    updateLivre,
    deleteLivre
};