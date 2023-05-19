const express = require('express');
const crypto = require('crypto');

const app = express();
const port = 3000;

// Ruta GET para obtener el hash
app.get('/:hash', (req, res) => {
    const data = req.params.hash; // Obtiene el valor de los parámetros de la ruta
    const hash = crypto.createHash('md5').update(data).digest('hex');

    res.send(hash); // Devuelve el hash como respuesta
});

app.listen(port, () => {
    console.log(`API running on http://localhost:${port}`);
});