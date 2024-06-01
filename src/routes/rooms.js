import express from "express";
import supabase from "../config/supabase.js";

const router = express.Router();

// Obtener todos los cuartos
router.get('/all', async (req, res) => {
  const { data, error } = await supabase
    .from('rooms')
    .select();
  if (error) {
    return res.status(500).send(error.message);
  }
  res.send(data);
});

// Obtener un cuarto por ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase
    .from('rooms')
    .select()
    .eq('id', id)
    .single();
  if (error) {
    return res.status(500).send(error.message);
  }
  res.send(data);
});

// Crear un nuevo cuarto
router.post('/', async (req, res) => {
  const { name, description, price_per_night, location, max_guests, is_active } = req.body;
  const { data, error } = await supabase
    .from('rooms')
    .insert([{ name, description, price_per_night, location, max_guests, is_active }]);
  if (error) {
    return res.status(500).send(error.message);
  }
  res.send(data);
});

// Actualizar un cuarto por ID
router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, description, price_per_night, location, max_guests, is_active } = req.body;
  const { data, error } = await supabase
    .from('rooms')
    .update({ name, description, price_per_night, location, max_guests, is_active })
    .eq('id', id);
  if (error) {
    return res.status(500).send(error.message);
  }
  res.send(data);
});

// Deshabilitar un cuarto por ID
router.patch('/:id/disable', async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase
    .from('rooms')
    .update({ is_active: false })
    .eq('id', id);
  if (error) {
    return res.status(500).send(error.message);
  }
  res.send(data);
});

// Eliminar un cuarto por ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase
    .from('rooms')
    .delete()
    .eq('id', id);
  if (error) {
    return res.status(500).send(error.message);
  }
  res.send(data);
});

export default router;
