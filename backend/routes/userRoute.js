const express = require("express");
const router = express.Router();
const User = require("../models/userModel"); // Fix: Capitalize User to match model
const mongoose = require("mongoose");

// CREATE
router.post("/", async (req, res) => {
  const { name, email, age } = req.body;

  try {
    const userAdded = await User.create({ name, email, age });
    res.status(201).json(userAdded);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: error.message });
  }
});

// GET ALL
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: error.message });
  }
});

// GET SINGLE
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const singleUser = await User.findById(id); // Fix: `findId` → `findById`
    if (!singleUser) return res.status(404).json({ error: "User not found" });
    res.status(200).json(singleUser);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: error.message });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await User.findByIdAndDelete(id); // Fix: correct method
    if (!deletedUser) return res.status(404).json({ error: "User not found" });
    res.status(200).json({ message: "User deleted", user: deletedUser });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ error: error.message });
  }
});

// UPDATE (PATCH)
router.patch('/:id', async (req, res) => {
    const {id} = req.params
    const {name, Email, age} = req.body
    try {
        const updatedData = await User.findByIdAndUpdate(id, req.body, {new: true});
        res.status(200).json(updatedData);
    } catch(error) {
        console.log(error);
        res.status(500).json({error: error.message})
    }
})

module.exports = router; 
