import express from 'express';
import { fetchdonations, receivedonations, usedonations } from '../Controllers/DonnationsController.js';
import { verifyToken } from '../Middleware/VerifyToken.js';



const Donationsrouter = express.Router();

Donationsrouter.get('/', verifyToken,fetchdonations);

Donationsrouter.post('/',receivedonations);

Donationsrouter.get('/:name', usedonations);

export default Donationsrouter;
