const express = require("express");
const app = express();
const fetch = require("node-fetch");
const cors = require("cors");

app.use(cors());
const port = process.env.PORT || 3000;




app.get("/drink/:ingredient", async (req, res) => {
  try {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${req.params.ingredient}`);
    const json = await response.json();
    console.log(json);
    res.send(json.drinks);
  } catch (e) {
    res.status(400).send(`something went wrong ¯\_(ツ)_/¯ `);
  }
})

app.listen(port, () => {
  console.log("connected");
})
