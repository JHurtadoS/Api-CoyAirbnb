import { createClient } from '@supabase/supabase-js';
import dotenv from "dotenv";

dotenv.config();

const supabase = createClient(process.env.URL, process.env.API_KEY);

export default supabase;