const express = require('express');
const routes = express.Router();
const SaqueController = require('./controllers/SaqueController');

const saqueController = new SaqueController();

routes.get('/', (req, res ) => {
    return res.json({ message: "Hello World!" });
});

routes.post('/saque', async (request, response ) => {
    try {
        const notas = await saqueController.fazSaque(request.body);
        console.log(notas);
        return response.status(200).send( notas );
    } 
    catch (error) {
        return response.status(404).send( error );
    }
});

routes.post('/cadastro', async (request, response ) => {
    const { name } = request.body;
    
    await db('users').insert({
        name,
    });

    return response.status(200).send();
});


module.exports = routes;