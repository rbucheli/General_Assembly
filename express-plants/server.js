// const express = require('express');
// const app = express();
// const port = 3000;

// const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam',  "Witches' Butter",];

// app.get('/:indexOfPlantsArray', (req, res) => { //
//     res.send(plants[req.params.indexOfPlantsArray]);
// });

// app.get('/oops/:indexOfPlantsArray', (req, res) => {
//   res.send(plants[req.params.indexOfPlantsArray]);
//   // error cannot send more than one response!
//   res.send('this is the index: ' + req.params.indexOfPlantsArray);
// });

// app.listen(port,() => {
//     console.log('listening on port' + port);
// });

// // Storing multiple params in the req.params object
// // Are we replacing firstname and lastname
// app.get('/hello/:Rodrigo/:Bucheli', (req, res) => {
//   console.log(req.params);
  
// 	res.send('hello ' + req.params.Rodrigo + ' ' + req.params.Bucheli);
// });

// Request Object, what's that about?
// Missed out on the last part of the lesson (console.log) entire Request Object