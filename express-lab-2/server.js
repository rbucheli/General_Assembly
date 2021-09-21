const express = require('express');
const app = express();
const port = 300;

app.get('/greeting/:Rodrigo', (req, res) => {
  // console.log('There you are!')
  res.send("What's up, Rodrigo");
});

app.listen(3000);

// Are we supposed to decalre port as a variable? If so, why?
