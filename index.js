import express from "express";
import { Dbconnection } from "./Utility/DbUtil.js";
import { PORT } from "./src/Constants/DbConstants.js";
import VolunteersRouter from "./src/Routers/VolunteerRouters.js";
import Userrouter from "./src/Routers/UserRoutes.js";
import Donationsrouter from "./src/Routers/DonationsRouter.js";
import Adminrouter from "./src/Routers/AdminRouter.js";
import cors from "cors";

const dbserver = express();

dbserver.use(cors());
dbserver.use(express.json());
dbserver.use("/Volunteers", VolunteersRouter);
dbserver.use("/users", Userrouter);
dbserver.use("/donations", Donationsrouter);
dbserver.use("/admin", Adminrouter);

dbserver.listen(PORT, () => {
  Dbconnection.connect((error) => {
    if (error) {
      console.log(`Unable to connnect to DBserver!! 
       ${error}`);
    } else {
      console.log("Database sucessfully connected");
    }
  });

  console.log(`dbserver is running on port ${PORT}`);
});
