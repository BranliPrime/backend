const express = require("express");
const mongoose = require("mongoose");
const { use } = require("./routes/user");
require("dotenv").config();
const userRoutes = require("./routes/user");
const cors = require("cors")
const app = express();
const port = process.env.PORT || 9000;

// middleware
app.use(express.json());
app.use(cors({
    origin: '*', // Permite cualquier origen
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Permitir métodos HTTP
    allowedHeaders: '*',
}));
app.use('/api', userRoutes);

//Routes
app.get("/", (req,res) => {
    res.send("Welcome to my API")
});

// mongodb connection
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log("Connected"))
.catch((error) => console.error(error));

app.listen(port, () => console.log('The server is on the port', port));
