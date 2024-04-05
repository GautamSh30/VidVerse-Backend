// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server listening at port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed ! ", err);
  });

/*
import { express } from "express";
const app = express();

(async () => {
  try {
    const connect = await mongoose.connect(
      `${process.env.MONGOOSE_URI}/${DB_NAME}`
    );

    app.on("error", (error) => {
      console.log("ERROR: ", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App listening to port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("ERROR: ", error);
    throw error;
  }
})();

*/
