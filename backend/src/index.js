// index file: this is the main entry point of our project that why all the project related things that are important to initialize when the entry point hit.
import dotenv from "dotenv"
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";

const port = process.env.PORT || 3000;

import { app } from "./app.js";

dotenv.config({
    path: "./.env"
})

;(async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

        console.log(`\n MONGODB CONNECTED SUCCESSFULLY !!! host: ${connectionInstance.connection.host}`);``
        app.on("error", (err) => {
            console.log("DB connection ERROR: ", err);
            throw err;
        });
        app.listen(port, () => {
            console.log("app is listing at port " + port);
        })
    } catch (err) {
        console.log("MONGODB connection FAILED: ", err);
        throw err;
    }
})()