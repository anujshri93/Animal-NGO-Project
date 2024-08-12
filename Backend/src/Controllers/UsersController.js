import { Dbconnection } from "../../Utility/DbUtil.js";
import { DB_NAME, USER_TABLE } from "../Constants/DbConstants.js";
import { hashSync } from "bcrypt";

export const fetchusers = (req, res) => {
  const qry = `SELECT * FROM ${DB_NAME}.${USER_TABLE}`;

  Dbconnection.query(qry, (error, result) => {
    if (error) {
      res.status(500).send({ messgae: "something went wrong!!" });
      console.log(error);
    } else {
      res.status(200).send(result);
    }
  });
};

export const adduser = (req,res)=>{
    const {email,phone,password}=req.body;

    const encryptedPassword = hashSync(password,10)

    const qry = `INSERT INTO ${DB_NAME}.${USER_TABLE} (email,phone,password) values ('${email}','${phone}','${encryptedPassword}')`

    Dbconnection.query(qry,(error,result)=>{

        if(error){
            if (error.code === 'ER_DUP_ENTRY') {
                return res.status(400).json({ error: 'email or phone number already exists' });
              }
              else{
                res.status(500).send({ messgae: "something went wrong!!" });
                console.log(error);
              }
           }
           else{
                res.status(200).send({messgae:"user signed up successfully"});
           }
    })
}
