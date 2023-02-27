const express = require('express');
const cors = require('cors');
const app = express();
const http = require('http');
const path = require('path'); 
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET);
require('./connection')
const server = http.createServer(app);
const {Server} = require('socket.io');



// const PORT = process.env.PORT || 3001;
// app.listen(PORT);

const io = new Server(server, {
  cors: `0.0.0.0`,
  methods: ['GET', 'POST', 'PATCH', "DELETE"]
})

// server.listen(PORT, ()=> {
//   console.log(`server running at ${PORT}`)
// })

const PORT = process.env.PORT || 3001;


if (process.env.NODE_ENV === "production") {

  app.use(express.static('client/build'))  // set static folder 
  
  app.get('*', (req, res)=> {     
    res.sendFile(path.resolve(__dirname, 'client', 'build',         
                  'index.html' )); 
  })
}

app.listen(PORT, () => {
  console.log(`Our app is running on port ${ PORT }`);
});

// if (process.env.NODE_ENV === 'production'){
//   app.use(express.static("client/build"));
// app.get('*',(req,res)=> {
//   res.sendFile(path.resolve(__dirname, 'client', 'build','index.html'));
// });
// }
 
// import product routes

const User = require('./models/User');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const imageRoutes = require('./routes/imageRoutes');

// use packages and rouets

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/images', imageRoutes);


app.post('/create-payment', async(req, res)=> {
  const {amount} = req.body; // extract amount from body
  console.log(amount);
  try {
  const paymentIntent = await stripe.paymentIntents.create({ // create payment intent with Stripe API
  amount, // set payment amount
  currency: 'usd', // set currency 
  payment_method_types: ['card'] // specify payment method 
  });
  res.status(200).json(paymentIntent) // send payment intent data as JSON response
  } catch (e) {
  console.log(e.message);
  res.status(400).json(e.message); 
  }
  })



app.set('socketio', io);
