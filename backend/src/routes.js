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

        return response.send( notas );
    } catch (error) {
        
    }
});

routes.post('/cadastro', async (request, response ) => {
    const { name } = request.body;
    
    await db('users').insert({
        name,
    });

    return response.send();
});


module.exports = routes;