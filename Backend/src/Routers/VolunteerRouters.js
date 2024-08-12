import express from "express";
import { fetchVolunteer, addVolunteer, deleteVolunteer, updateVolunteer } from "../Controllers/VolunteerController.js";
import { verifyToken } from "../Middleware/VerifyToken.js";
const VolunteersRouter = express.Router();

VolunteersRouter.get('/',verifyToken,fetchVolunteer);

VolunteersRouter.post('/', addVolunteer);

VolunteersRouter.delete('/:ID',verifyToken, deleteVolunteer);

VolunteersRouter.put('/:ID', verifyToken , updateVolunteer);



export default VolunteersRouter;