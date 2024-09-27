const express = require('express');
const router = express.Router();
const ownerModel = require('../models/owner-model');

if (process.env.Node_ENV === 'development') {
  router.post('/create', async (req, res) => {
    let owners = await ownerModel.find();
    if (owners.length > 0) {
      return res.status(404).send('You do not have permission to create a new owner');
    }
    let { fullname, email, password } = req.body;
    let createdOwner = await ownerModel.create({
      fullname,
      email,
      password,
    });
    res.status(201).send(createdOwner);
  });
}

router.get('/admin', (req, res) => {
  res.send('Admin panel is working');
});

module.exports = router;
