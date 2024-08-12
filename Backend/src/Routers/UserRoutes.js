import express from "express"
import { fetchusers, adduser } from "../Controllers/UsersController.js";
import { verifyToken } from "../Middleware/VerifyToken.js";


const Userrouter = express.Router();

Userrouter.get('/', fetchusers );

Userrouter.post('/',adduser);

export default Userrouter; 