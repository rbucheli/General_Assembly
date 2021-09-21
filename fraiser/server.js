const express = require("express");
const app = express();

app.get('/frasier', (req, res) => {
  res.send("Once in prep school, the Existentialist Club once named me 'Most Likely to Be'");
});

app.listen(3000);

// Pay attention to the "npm i express" step and "node server.js express"

//"Node server.js express" is sending that info to host? or is it sending and then responding?