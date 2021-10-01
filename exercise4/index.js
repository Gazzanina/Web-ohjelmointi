const express = require('express')
const app = express()
const port = 3000
const { v4: uuidv4 } = require('uuid');

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

let items =[
    {
      id: uuidv4(),
      name: 'Good as Gold',
      author: 'Colourpop Cosmetics',
      type: 'Eyeshadow Palette',
      description: 'The online makeup company seems to be right behind Anastasia Beverly Hills as the favorite makeup brand of famous beauty bloggers and makeup junkies alike. ColourPop carries eyeliners, liquid and solid lipsticks, lip pencils, eye shadows, highlighters, and bronzers, each selling at a low price.',
      price: 18.95
    },
    {
      id: uuidv4(),
      name: 'Pink Religion',
      author: 'Jeffree Star Cosmetics',
      type: 'Artistry Palette',
      description: 'Jeffree Star Cosmetics is an American cosmetics company founded by internet personality Jeffree Star. Star claims to have invested his life savings to start the companys makeup line in 2014 with an initial three liquid lipstick colors. The company is estimated to sell US$100 million annually. All products are vegan and cruelty-free.',
      price: 59.95
    },
    {
      id: uuidv4(),
      name: '35B X Lisa Frank',
      author: 'Morphe',
      type: 'Artistry Palette',
      description:'MORPHE IS THE MAKEUP BRAND OF CHOICE FOR THE INSTAGRAM GENERATION, GROWING A CLAMOROUS FAN BASE OF 5 MILLION ON THE PLATFORM IN THREE YEARS. Their huge range of affordable brushes, palettes and cosmetic products have become world famous, loved by professionals as much as their fans.',
      price: 33.99
    }
  ];

let users = [
  {
    id: uuidv4(),
    username: 'Minna Miettinen',
    address: 'Osoitteenkatu 10',
    email: 'minna@miettinen'
  },
  {
    id: uuidv4(),
    username: 'Matti Muukalainen',
    address: 'Osoitekuja 15',
    email: 'matti@muukalainen'
  }
];


app.get('/', (req, res) => {
  res.send('HI THERE')
})

/* get all products*/
app.get('/products', (req, res) =>{
  res.json(items); 
})

/* get single product*/
app.get('/products/:id', (req, res) =>{
  const result = items.find(d => d.id === req.params.id);
  res.json(result);
})

/* create new product (name, manufacturer, category, description, price - bonus image)*/
app.post('/products', (req, res) =>{
  console.log ('Creating a new product');
  console.log(req.body);
  items.push({
    id: uuidv4(),
    name: req.body.name,
    author: req.body.author,
    type: req.body.type,
    description: req.body.description,
    price: req.body.price
  })
  res.send('Product created');
})

/* modify product*/
app.put('/products/:id', (req, res)=>{
  res.send ('Product updated');
})

/* Search for products based on name, manufacturer, category*/

/* get all users*/
app.get('/users', (req, res) =>{
  res.json(users); 
})
//* Create user (basic information name, address etc.)
app.post('/users', (req, res) =>{
  console.log ('Creating a new user');
  console.log(req.body);

  users.push({
    id: uuidv4(),
    username: req.body.username,
    address: req.body.address,
    email: req.body.email
  })
  res.send('User created');
})

/* Purchase products for a user -> create invoice with information of all the bought products + total sum

* Get invoices of a user

* Get a single invoice of a user

* Delete invoice of a user*/

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})