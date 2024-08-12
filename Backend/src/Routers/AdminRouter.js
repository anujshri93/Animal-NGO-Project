import express from 'express'
import { Registeradmin, adminLogin, fetchadmins } from '../Controllers/AdminsController.js';
import { verifyToken } from '../Middleware/VerifyToken.js';

const Adminrouter = express.Router();



Adminrouter.get('/', verifyToken,fetchadmins );

Adminrouter.post('/',Registeradmin);

Adminrouter.post('/login', adminLogin);

export default Adminrouter ;