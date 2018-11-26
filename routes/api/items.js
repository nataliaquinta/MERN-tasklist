const express = require('express');
const router = express.Router();

//Item model (models have first capital letter)
const Item = require('../../models/Item');

// @route GET api/items
// @desc Get All Items
// @access Public
router.get('/', (req, res) => {
    Item.find()
    .sort({
        color: -1
    }) 
    .then(items => res.json(items));
});


// @route POST api/items
// @desc Create an Item
// @access Public
//private ith autenticaion
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name,
        color: req.body.color
    }); 
    newItem.save().then(item => res.json(item));
});

// @route DELETE api/items/:id
// @desc delete an Item
// @access Public
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}))
})


module.exports = router;