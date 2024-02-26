import mongoose from "mongoose";
import { pageSchema, userSchema } from "../schema/mongooseSchema";

export const Users = mongoose.model("users", userSchema);
export const Pages = mongoose.model("pages", pageSchema);

