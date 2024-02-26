import { UserSession } from "common";
import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";
configDotenv();

const SECRET = process.env.NEXTAUTH_SECRET;
export const authenticateJwt = (req: any, res: any, next: any) => {
  next();
  // const token = req.headers.cookie.split("token=")[1];
  // console.log(token, SECRET);
  // if (token) {
  //   jwt.verify(token, SECRET, (err, user, next) => {
  //     if (err) {
  //       console.log(err, "error");
  //       res.status(400).send({ message: "un-authorized" });
  //     } else {
  //       next();
  //     }
  //   });
};

//   let parsedUser = UserSession.safeParse(req.body);
//   if (!parsedUser.success) {
//     res.send("Incorrect input 2");
//   }
