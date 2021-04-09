const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));
app.use(express.json()); // body-parser

app.post('/api/cupcakes', (req, res) => {
  console.log('req.body', req.body);
  res.end();
});

app.put('/api/cupcakes/:id', (req, res) => {
  console.log('req.params', req.params);
  res.end();
});

app.post('/api/cookies/:flavor/:texture', (req, res) => {
  console.log('req.params', req.params);
  res.end();
});

app.post('/api/icecream', (req, res) => {
  console.log('req.query', req.query);
  res.end();
});

app.get('/api/donuts', (req, res) => {
  const donuts = ['chocolate', 'maplebar', 'bearclaw', 'applefritter', 'oldfashioned'];
  res.send(donuts);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});