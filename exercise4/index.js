const express = require('express')
const app = express()
const port = 3000
const productData = require('./data.json');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(express.json());
app.use(cors());
app.use(bodyParser);

let productIdAccumulator = productData.lenght;


app.get('/', (req, res) => {
  res.send('Hi World!')
})

app.get('/products', (req, res) =>{
  res.json(productData); 
})

app.get('/products/:id', (req, res) =>{
  console.log(req.params);
  res.send('Product id is ' + req.params.id);
})

app.post('/products', (req, res) =>{
  console.log ('Creating a new product');
  console.log(req.body);
  productIdAccumulator ++;
  productData.push({
    id:productIdAccumulator,
    name: req.body.name,
    author: req.body.author,
    type: req.body.type,
    price: req.body.price,
  })
  res.send('New product created...') 
})

app.delete('/products/:id', (req, res) => {
  res.send('Delete product with id ' + req.params.id);
})

app.delete('/products', (req, res) => {
  res.send('Delete all products');
})

app.put('/products/:id', (req, res) =>{
  res.send ('Modifying product')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})