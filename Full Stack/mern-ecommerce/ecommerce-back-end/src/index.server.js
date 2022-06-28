const express = require("express");
const app = express();

app.listen(process.env.POR, ()=> {
    console.log(`Server is running on port ${process.env.PORT}`)
})