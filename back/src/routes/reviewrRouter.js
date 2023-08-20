const express = require('express');
const router = express.Router();

const postReviewr = require("../controllers/Reviewr/postReviewr")

router.post('/', async (req, res) => {
    const { clienteId, productoId, rating, comentario } = req.body;

    if (!clienteId || !productoId || !rating || !comentario) {
        return res.status(400).json({ error: 'Faltan propiedades en la solicitud.' });
    }

    try {
        const nuevaReseña = await postReviewr(clienteId, productoId, rating, comentario);
        res.status(201).json(nuevaReseña);
    } catch (error) {
        console.error('Error al agregar la reseña:', error.message);
        res.status(500).json({ error: 'Ha ocurrido un error al agregar la reseña: ' + error.message });
    }

});

module.exports = router;