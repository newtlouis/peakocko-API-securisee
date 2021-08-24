const express = require('express');
const router = express.Router();
const Thing = require ('../models/Thing.js');

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const saucesCtrl = require('../controllers/sauces');

router.post('/',auth, multer,saucesCtrl.createSauce);
router.get('/', auth, saucesCtrl.showAllSauces);
router.delete('/:id',auth, saucesCtrl.deleteSauce);
router.put('/:id', auth, multer, saucesCtrl.updateSauce);
router.get('/:id', auth, saucesCtrl.showSauce);


// router.post('/api/auth/login',(req, res, next) => {
//   res.status(201).json({ message: 'Votre requête a bien été reçue !' });
//   next();
// });

// router.post('/api/auth/signup',(req, res, next) => {
//   res.status(201).json({ message: 'Votre requête a bien été reçue !' });
//   next();
// });

module.exports = router;