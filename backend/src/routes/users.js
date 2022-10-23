/**
 * This file is used for operations on OTHER users, NOT the current user.
 */
const { Router } = require('express');
const db = require('../config/databaseConfig')
const checkSession = require('../utils/sessionChecker')

const router = Router();

router.post('/', (req, res, next) => {
    const query = `SELECT * FROM accounts WHERE account_username = ? OR account_password = ? ;`
    db.query(query, [req.body.username, req.body.password], (err, result) => {
        //handle any errors
        if (result[0]) {
            return res.status(400).send('Username or Password is already in use');
        }
        next();
    });
}, (req, res) => {
    // TODO hash the password before saving
    const userToAdd = [
        req.body.first_name,
        req.body.last_name,
        req.body.username,    
        req.body.password,
        req.body.email,
        0,
        0,
        0
    ];

    const insertStatement =
        `INSERT INTO accounts
            (first_name, last_name, account_username, account_password, email, games_joined, games_attended, rating)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?) ;`;

    db.query(insertStatement, userToAdd, (err, res) => {
        //Handle any errors
    });

    return res.status(200).send('Successful Creation'); 
}
);

// Get's the information of the currently logged in user (this is assuming a session has been implemented)
router.get('/', checkSession, (req, res) => {

});

// Gets the ID of some other user
router.get('/:id', checkSession, (req, res) => {

    const query = `SELECT account_username, account_id, first_name, last_name FROM accounts 
    WHERE accounts.account_id = ? ;`

    db.query(query, [req.params.id], (err, result) => {
        if (result === undefined || result.length == 0) {
            return res.status(400).send("Not found");
        }
    
        return res.status(200).send(result[0]);
    });

    
});

// Sends the list of this player's favorite sport
router.get('/:id/sports', checkSession, (req, res) => {

    const query = `SELECT sports.sport_name, sports.sport_id FROM player_sport_favorite 
    JOIN sports ON player_sport_favorite.sport_id = sports.sport_id 
    WHERE account_id = ? ;`

    db.query(query, [req.params.id], (err, result) => {
        if (result === undefined || result.length == 0) {
            return res.status(400).send("Not found");
        }
    
        return res.status(200).send(result);
    });
    
    
});

module.exports = router;