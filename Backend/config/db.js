/* eslint-disable import/extensions */
import mongoose from "mongoose";
import keys from "./keys.js";
import schedule from "node-schedule";
import { Commit } from "../model/index.js";

export default async () => {
  try {
    await mongoose.connect(keys.mongoURI);
    //batch jobs
    schedule.scheduleJob("* * 1 1,4,7,10 *", async () => {
      console.log("Reset totalScore in commit db");
      await Commit.updateMany({}, { $set: { totalScore: 0 } });
    });
  } catch (err) {
    console.error(err.message);
  }
};
