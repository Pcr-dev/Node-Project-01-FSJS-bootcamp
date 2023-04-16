import mongoose from "mongoose";
import app from "./app.js";
import config from "./config/index.js"

(async () => {
   try {
      await  mongoose.connect(config.MONGODB_URL)
      console.log("DATABASE CONNECTED !")

      // checking if there is any error with express app when handshaking with database
      app.on("error",(err) => {
         console.error("Error",err)
         throw err;
      })

      const onListening = () => {
         console.log(`Connected over PORT {config.PORT}`)
      }

      app.listen(config.PORT,onListening);

   } catch (error) {
         console.error("Error :", error)
         throw error;
   } 
}) ()