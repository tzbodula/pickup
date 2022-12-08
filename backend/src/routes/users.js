/**
 * This file is used for operations on OTHER users and not just the current user.
 * Basic stuff such as deletion, creation, updating and viewing of the table.
 */
const { Router } = require('express');
const db = require('../config/databaseConfig')
const checkSession = require('../utils/sessionChecker')
const bcryptjs = require('bcryptjs');

const router = Router();

router.post('/', (req, res, next) => {
    const numSaltRounds = 8;
    const password = req.body.password
        
    const query = `SELECT * FROM accounts WHERE account_username = ? OR email = ? ;`
    db.query(query, [req.body.username, req.body.email], (err, result) => {

        //handle any errors
        if (result[0]) {
            return res.status(400).send({message: 'Username or Password is already in use', status:400});
        }
        res.locals.hash_password = bcryptjs.hashSync(password, numSaltRounds);
        next();
    
    });
}, (req, res) => {
    const userToAdd = [
        req.body.first_name,
        req.body.last_name,
        req.body.username,    
        res.locals.hash_password,
        req.body.email];

    const insertStatement =`INSERT INTO accounts
        (first_name, last_name, account_username, account_password, email, games_joined, games_attended, rating, bio)
        VALUES (?, ?, ?, ?, ?, 0, 0, 0, "") ;`;

    db.query(insertStatement, userToAdd, (err, result) => {
        if (err) {
            console.log(err)
        }

        return res.status(200).send({message:'Successful Creation', status:200}); 
    });
});

// Gets the ID of some other user
router.get('/:id', checkSession, (req, res) => {

    const query = `SELECT account_username, bio, rating, games_joined, games_attended FROM accounts 
    WHERE accounts.account_id = ? ;`

    db.query(query, [req.params.id], (err, result) => {
        if (result === undefined || result.length == 0) {
            return res.status(400).send({message: "Not found", status: 400});
        }
    
        return res.status(200).send({data: result[0], status: 200});
    });

    
});

// Sends the list of this player's favorite sport
router.get('/:id/sports',  (req, res) => {

    const query = `SELECT sports.sport_name, sports.sport_id FROM player_sport_favorite 
    JOIN sports ON player_sport_favorite.sport_id = sports.sport_id 
    WHERE account_id = ? ;`

    db.query(query, [req.params.id], (err, result) => {
        if (result === undefined || result.length == 0) {
            return res.status(400).send({message: "Not found", status: 400});
        }

        return res.status(200).send({data: result, status: 200});
    });


});

module.exports = router;