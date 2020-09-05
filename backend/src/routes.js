const db = require('./database/connections');
const express = require('express');
const routes = express.Router();
const SaqueController = require('./controllers/SaqueController');
const Auth = require('./controllers/AuthController');
const jwt = require("jsonwebtoken");
const SECRET = "senJN89Xnj8cd3298AS@ha";
const saqueController = new SaqueController();
const auth = new Auth();

const authMiddleware = async (req, res, next) => {
    const [, token] = req.headers.authorization.split(' ');

    if (!token) {
        return res.status(401).send({ auth: false, message: 'Token não informado.' });
    }
    
    jwt.verify(token, SECRET, function(err, decoded) {
        if (err) {
            return res.status(500).send({ auth: false, message: 'Token inválido.' });
        }
        next(); 
    }); 
}

routes.get('/users', async (req, res ) => {
    var usuarios = await db('users').select('*');
    return res.status(200).send( usuarios );
});

routes.post('/user', async (req, res ) => {
    var usuario = await db('users').where({conta: req.body.conta});
    return res.status(200).send( usuario );
});

routes.post('/saque', authMiddleware, async (request, response ) => {
    try {
        const notas = await saqueController.fazSaque(request.body);
        return response.status(200).send( notas );
    } 
    catch (error) {
        return response.status(404).send( error );
    }
});

routes.post('/cadastro', async (request, response ) => {
    try {
        const registro = await auth.registro(request.body);
        return response.status(200).send( registro );
    } 
    catch (error) {
        return response.status(404).send( error );
    }
});

routes.post('/login', async (request, response ) => {
    try {
        const login = await auth.login(request.body);
        return response.status(200).send( login );
    } 
    catch (error) {
        return response.status(404).send( error );
    }
});


module.exports = routes;