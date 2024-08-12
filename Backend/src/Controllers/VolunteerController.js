import { Dbconnection } from "../../Utility/DbUtil.js";
import { DB_NAME, VOLUNTEER_TABLE } from "../Constants/DbConstants.js";

export const fetchVolunteer = (req, res) => {
  const qry = `SELECT * FROM ${DB_NAME}.${VOLUNTEER_TABLE}`;

  Dbconnection.query(qry, (error, result) => {
    if (error) {
      res.status(500).send({ messgae: "something went wrong!!" });
      console.log(error);
    } else {
      res.status(200).send(result);
    }
  });
};

export const addVolunteer = (req, res) => {
  const { name, email, phone, experience } = req.body;

  const qry = `INSERT INTO ${DB_NAME}.${VOLUNTEER_TABLE} (name,email,phone,exp) VALUES ('${name}','${email}','${phone}','${experience}')`;

  Dbconnection.query(qry, (error, result) => {
    if (error) {
      if (error.code === "ER_DUP_ENTRY") {
        return res.status(400).json({ error: "Volunteer already exists" });
      } else {
        res.status(500).send({ messgae: "something went wrong!!" });
        console.log(error);
      }
    } else {
      res.status(200).send({ message:"Volunteer registered successfully!!" });

      console.log(result);
    }
  });
};

export const deleteVolunteer = (req, res) => {
  const id = req.params.ID;

  const qry = `Delete from ${DB_NAME}.${VOLUNTEER_TABLE} where ID = ${id}`;

  Dbconnection.query(qry, (error, result) => {
    if (error) {
      console.log(error);

      res.status(500).send({ error: "unable to remove Volunteer!!" });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Volunteer not found" });
    } 
    
    else {
      console.log(result);

      res
        .status(204)
        .send({ message: "Volunteer removed from database successfully" });
    }
  });
};


export const updateVolunteer = (req,res)=>{

    const {ID,NAME,EMAIL,PHONE,EXP} = req.body;
   

    const qry = `UPDATE ${DB_NAME}.${VOLUNTEER_TABLE} SET ID=${ID}, NAME = '${NAME}',EMAIL= '${EMAIL}',PHONE= '${PHONE}',EXP = '${EXP}' WHERE ID = ${req.params.ID}`

    Dbconnection.query(qry,(error,result)=>{

        console.log(result);
     
        if(error){
            console.log(error);
            res.status(500).send({error:"unable to update Volunteer!!"})
        }
        if(result.affectedRows === 0){
            return res.status(404).json({error:"Volunteer not found!!" });
        }
        else{
            console.log(result);
            res.status(200).send({message:"Volunteer updated successfully!!" });
        }

    })
}