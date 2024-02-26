import express from "express";
import { Pages, Users } from "../models/mongooseModel";
const router = express.Router();
import { Schema } from "mongoose";
import { authenticateJwt } from "../middlewares/authenticateJwt";

router.get("/profile", async (req, res) => {
  const { useremail } = req.headers;
  try {
    const user = await Users.findOne({ useremail });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(400).send({ message: "User Not Found" });
    }
  } catch (err) {
    res.status(400).send({ message: "User Not Found" });
  }
});

router.get("/my-pages", authenticateJwt, async (req, res) => {
  const { useremail } = req.headers;
  const user = await Users.findOne({ useremail });
  if (user) {
    const pageData = await Pages.find({ authorid: user._id });
    res.status(200).json(pageData);
  } else {
    res.status(400).send({ message: "No Pages" });
  }
});

router.post("/create-page", authenticateJwt, async (req, res) => {
  const { useremail, crrpageid } = req.headers;
  const user = await Users.findOne({ useremail });
  if (user) {
    const newPageData = {
      authorid: user._id,
      pageContent: "testing",
      pageName: "test",
      refToOtherPages: [],
    };
    const newPage = await new Pages(newPageData);
    const newPageRes = await newPage.save();
    if (crrpageid) {
      await Pages.updateOne(
        { _id: crrpageid },
        { $push: { refToOtherPages: newPageRes._id } }
      );
    }
    res.status(200).send({ message: "created" });
  } else {
    res.status(400).send({ message: "No Pages" });
  }
});

// router.post("/", (req: any, res: any) => {
//   let parsedUser = UserSession.safeParse(req.body);
//   if (!parsedUser.success) {
//     res.send("Incorrect input 2");
//   }
// });

export default router;
