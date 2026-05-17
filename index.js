const express = require('express')
require('dotenv').config()
const pool = require('./config/db');
const authRoutes = require('./routes/authRoutes.js')

const app = express();

app.get("/",(req,res) => {
    res.json({ message : "Auth API is running" });
});

app.use(express.json())

app.use('/auth', authRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT , async () => {
    console.log(`Server running on PORT ${PORT}`);
    try{
        await pool.query('SELECT 1');
        console.log("Database Connected Successfully!!");
    } catch(err){
        console.error(`There is a problem : ${err.message}`);
    }
});

