import { Dbconnection } from "../../Utility/DbUtil.js";
import { compareSync, hashSync } from "bcrypt";
import { ADMIN_TABLE, DB_NAME } from "../Constants/DbConstants.js";
import jwt from 'jsonwebtoken';

export const fetchadmins = (req, res) => {
  const qry = `SELECT * FROM ${DB_NAME}.${ADMIN_TABLE}`;

  Dbconnection.query(qry, (error, result) => {
    if (error) {
      res.status(500).send({ message: "something went wrong!!" });
      console.log(error);
    } else {
      res.status(200).send(result);
    }
  });
};

export const Registeradmin = (req, res) => {
  const { email, phone, password } = req.body;
  console.log(req.body);
  
  const encryptedPassword = hashSync(password, 10);

  const qry = `INSERT INTO ${DB_NAME}.${ADMIN_TABLE} (email,phone,password) values ('${email}','${phone}','${encryptedPassword}')`;

  Dbconnection.query(qry, (error, result) => {
    if (error) {
      if (error.code === "ER_DUP_ENTRY") {
        return res
          .status(400)
          .json({ error: "email or phone number already exists" });
      } else {
        res.status(500).send({ message: "something went wrong!!" });
        console.log(error);
      }
    } else {
      console.log(result);
      res.status(200).send({ message: "Admin registered successfully" });
    }
  });
};

export const adminLogin = (req, res) => {
  const { email, password } = req.body;
  const qry = `SELECT * FROM ${DB_NAME}.${ADMIN_TABLE} WHERE email = '${email}'`;

  Dbconnection.query(qry, (error, result) => {
    if (error) {
      res.status(500).send({ message: "something went wrong!!" });
    } else {
      console.log(result);
      if (result.length === 0) {
        res.status(400).send({ message: "Invalid username" });
      }else{
        const encryptedPassword = result[0].Password;
        if(compareSync(password,encryptedPassword)){
            const token = jwt.sign({adminID:result[0].ID},'bhawbhaw');
            res.status(200).send({ message: "Admin logged in successfully",token:token });
            

        }else{
            res.status(400).send({ message: "Invalid password for the mentioned email " });
        }
      }
    }
  });
};

//hash function is Async
//has function is Sync as we dont want the controller to move forward before password is encrpted
