import express from 'express';
import contacts from '../data/contacts.json';
let router = express.Router();

let data = {
    contacts
};

// get all contacts
router.get('/contacts', (req, res) => {
    res.json(data.contacts);
});

// get one contact by id
router.get('/contacts/:id', (req, res) => {
    res.json(data.contacts.filter((item) => item.id === parseInt(req.params.id, 0))[0] || {});
});

export default router;



