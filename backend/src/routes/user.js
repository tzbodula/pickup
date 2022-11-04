/**
 * Use this file when we want to perform data related to the CURRENT user that is logged in.
 */
const { Router } = require('express');
const db = require('../config/databaseConfig')
const bcryptjs = require('bcryptjs');
const checkSession = require('../utils/sessionChecker')

const router = Router();

router.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    
    const query = `SELECT account_id, account_username, email, account_password FROM accounts WHERE account_username = ?;`

    db.query(query, [username], (err, result) => {
        
        if (result === undefined || result.length == 0) {
            return res.status(401).send({
                message: "Invalid credentials",
                status: 401
            })
        }

        if (!bcryptjs.compareSync(password, result[0].account_password)) {
            return res.status(401).send({
                message: "Invalid credentials",
                status: 401
            })
        }

        req.session.user_id = result[0].account_id;
        req.session.account_username = result[0].account_username;
        
        return res.status(200).send({message:"Logged in successfully", status:200, account_id: req.session.user_id});
    })
    
})

router.post('/logout', (req, res) => {
    req.session.destroy();
    return res.status(200).send({
        message:'Logged out successfully',
        status: 200
    });
})

// Update Username and Bio of User's Profile
router.put('/updateProfile', (req, res) => {
    const query = `SELECT * FROM accounts WHERE account_username = ?;`
    db.query(query, [req.body.newUsername], (err, result) => {
        //handle any errors
        if (result[0]) {
            return res.status(400).send({message: 'Username is already in use', status:400});
        }
        const updateStatement =
        `UPDATE accounts SET account_username = ?, bio = ? WHERE account_id = ?;`

    db.query(updateStatement, [req.body.newUsername, req.body.newBio, req.session.account_id], (err, res) => {
        //Handle any errors
    });

    return res.status(200).send({message:'Update Successful', status:200}); 
    });
});

router.get('/',  (req, res) => {
    if (req.session.account_id == null) {
        return res.status(200).send({status: 400, message: "Not authorized"})
    }
    const account_id = req.session.account_id;
    const query = `SELECT account_username, games_joined, games_attended, rating, bio FROM accounts WHERE account_id = ? ;`
    db.query(query, [account_id], (err, result) => {
        return res.status(200).send({data: result[0], status: 200})
    })
});

router.get('/sports', (req, res) => {
    const query = `SELECT * FROM player_sport_favorite
    JOIN sports ON player_sport_favorite.sport_id = sports.sport_id
    WHERE player_sport_favorite.account_id = ?
    ;`

    db.query(query, [req.session.account_id], (err, result) => {
        return res.status(200).send({data: result})
    })
})

module.exports = router;