import { Dbconnection } from "../../Utility/DbUtil.js";
import { DB_NAME, DONATIONS_TABLE } from "../Constants/DbConstants.js";

export const receivedonations = (req, res) => {
  const { name, phone, email, pan, amount } = req.body;

  const qry = `INSERT INTO ${DB_NAME}.${DONATIONS_TABLE} 
                 (name,phone,email,PAN, DonationAmount) VALUES('${name}','${phone}','${email}','${pan}',${amount})`;

  Dbconnection.query(qry, (error, result) => {
    if (error) {
      res.status(500).send({ message: "something went wrong!!" });
      console.log(error);
    } else {
      res.status(200).send({ message: "Donation received successfully!!" });
    }
  });
};


export const fetchdonations = (req, res) => {
  const qry = `SELECT * FROM ${DB_NAME}.${DONATIONS_TABLE}`;
  Dbconnection.query(qry, (error, result) => {
    if (error) {
      res.status(500).send({ message: "something went wrong!!" });
    } else {
      res.status(200).send(result);
    }
  });
};


export const usedonations = (req, res) => {
  const name = req.params.name;
  console.log(req.params.name);

  const qry = `SELECT * FROM ${DB_NAME}.${DONATIONS_TABLE} WHERE name = '${name}'`;

  Dbconnection.query(qry, (error, result) => {
    if (error) {
      console.error("Error querying database:", error);
      res.status(500).send({ message: "Unable to fetch Donation Data!!" });
    } else if (result.length === 0) {
      // Handle the case where no data is found
      res.status(404).send({ message: "No donations received for the name" });
    } else {
      console.log(result);
      const DonationAmount = result[0].DonationAmount;

      if (DonationAmount === 0) {
        res.status(404).send({ message: "No donations received for the name" });
      } else {
        const catFood = DonationAmount * 0.2;
        const dogFood = DonationAmount * 0.4;
        const cowFood = DonationAmount * 0.4;

        res.json({
          name,
          DonationAmount,
          catFood,
          dogFood,
          cowFood,
        });
      }
    }
  });
};




// export const usedonations = (req, res) => {
//   const name = req.params.name;
//   console.log(req.params.name);

//   const qry = `SELECT * FROM ${DB_NAME}.${DONATIONS_TABLE} WHERE name = '${name}'`;

//   Dbconnection.query(qry, (error, result) => {
//     if (error) {
//       console.error("Error querying database:", error);
//       res.status(500).send({ message: "Unable to fetch Donation Data!!" });
//     } else {
//       console.log(result);
//       const DonationAmount = result[0].DonationAmount;

//       if (DonationAmount === 0) {
//         res.status(404).send({ message: "No donations received for the name" });
//       } else {
//         const catFood = DonationAmount * 0.2;
//         const dogFood = DonationAmount * 0.4;
//         const cowFood = DonationAmount * 0.4;

//         res.json({
//           name,
//           DonationAmount,
//           catFood,
//           dogFood,
//           cowFood,
//         });
//       }
//     }
//   });
// };
