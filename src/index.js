import express from "express";
import pkg from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const { urlencoded } = pkg;
import dotenv from "dotenv";
import bodyParser from "body-parser";
import {createClient} from '@supabase/supabase-js'



dotenv.config();
const app = express();

app.use(urlencoded({ extended: true }));
app.use(bodyParser.json());

dotenv.config();

const supabase = createClient(process.env.URL,process.env.API_KEY );

app.get('/rooms/all', async (req, res) => {
    const {data, error} = await supabase
        .from('rooms')
        .select()
    res.send(data);
});

app.listen(8080, () => {
  console.log(__dirname);
  console.log("Server is running on 8080");
});
