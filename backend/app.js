const express = require('express');
const bodyParser = require('body-parser');
const Thing = require ('./models/Thing.js');
const path = require('path');

// Connexion à MongoDb
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://newtlouis:Vacances1@cluster0.hwmp8.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  app.use(bodyParser.json());
// Import routes
const saucesRoutes = require('./routes/sauces');
const usersRoutes = require('./routes/users');
const likeRoute = require('./routes/like');

app.use('/images',express.static(path.join(__dirname, 'images')));

app.use('/api/sauces', saucesRoutes); 
app.use('/api/auth',usersRoutes);
app.use('/api/sauces/:id/like', likeRoute);

module.exports = app;