/**
 * This file is used for operations on OTHER users, NOT the current user.
 */
const { Router } = require('express');
const db = require('../config/databaseConfig')
const checkSession = require('../utils/sessionChecker')
const bcryptjs = require('bcryptjs');

const router = Router();

router.post('/', (req, res) => {

    
    const numSaltRounds = 8;

    const password = req.body.password
    
    const hash_password = bcryptjs.hashSync(password, numSaltRounds);
    
    const userToAdd = [
        req.body.first_name,
        req.body.last_name,
        req.body.username,    
        hash_password,
        req.body.email,
        0,
        0,
        0,
        ""
    ];

    const query = `SELECT * FROM accounts WHERE account_username = ? OR email = ? ;`
    db.query(query, [req.body.username, req.body.email], (err, result) => {
        //handle any errors
        if (result[0]) {
            return res.status(400).send({message: 'Username or Password is already in use', status:400});
        }
        const insertStatement =
        `INSERT INTO accounts
            (first_name, last_name, account_username, account_password, email, games_joined, games_attended, rating, bio)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?) ;`;

    db.query(insertStatement, userToAdd, (err, result) => {
        if (err) {
            console.log(err)
        }

        return res.status(200).send({message:'Successful Creation', status:200}); 
    });

    
    });
});

// Gets the ID of some other user
router.get('/:id', (req, res) => {

    const query = `SELECT account_username, account_id, first_name, last_name FROM accounts 
    WHERE accounts.account_id = ? ;`

    db.query(query, [req.params.id], (err, result) => {
        if (result === undefined || result.length == 0) {
            return res.status(400).send({message: "Not found", status: 400});
        }
    
        return res.status(200).send({data: result[0], status: 200});
    });

    
});


module.exports = router;