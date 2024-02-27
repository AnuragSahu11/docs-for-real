import { Schema } from "mongoose";

export const userSchema = new Schema({
  username: String,
  useremail: String,
});

userSchema.set("timestamps", true);

export const pageSchema = new Schema({
  authorid: { type: Schema.Types.ObjectId, ref: "users" },
  pageName: String,
  pageContent: String,
  refToOtherPages: [
    { type: Schema.Types.ObjectId, ref: "pages", required: false },
  ],
});

pageSchema.set("timestamps", true);
