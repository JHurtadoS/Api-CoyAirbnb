import express from "express";
import pkg from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const { urlencoded } = pkg;
import { query } from "../db/db.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(urlencoded({ extended: true }));
dotenv.config();
app.get("/reservations/all", async (req, res) => {
  try {
    const result = await query("SELECT * FROM public.reservations");
    console.log(result);
    res.json(result.rows);
  } catch (err) {
    console.error("Error ejecutando la consulta", err.stack);
    res.status(500).send("Error obteniendo las reservas");
  }
});

app.listen(8080, () => {
  console.log(__dirname);
  console.log("Server is running on 8080");
});
