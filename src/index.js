import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
import dotenv from "dotenv";
import bodyParser from "body-parser";
import roomsRouter from "./routes/rooms.js";

dotenv.config();
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/rooms', roomsRouter);

app.listen(8080, () => {
  console.log(__dirname);
  console.log("Server is running on 8080");
});
