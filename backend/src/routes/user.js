/**
 * Use this file when we want to perform data related to the CURRENT user that is logged in.
 */
const { Router } = require('express');
const db = require('../config/databaseConfig')
const checkSession = require('../utils/sessionChecker')

const router = Router();


router.get('/sports', (req, res) => {
    const query = `SELECT * FROM player_sport_favorite
    JOIN sports ON player_sport_favorite.sport_id = sports.sport_id
    WHERE player_sport_favorite.account_id = ?
    ;`

    db.query(query, [req.session.account_id])
})

router.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password; //TODO hash the password and compare it to the password field in the DB

    const query = `SELECT account_id, account_username, email FROM accounts WHERE account_username = ? AND account_password = ?;`

    db.query(query, [username, password], (err, result) => {
        
        if (result === undefined || result.length == 0) {
            return res.status(401).send({
                message: "Invalid credentials",
                status: 401
            })
        }
    
        req.session.account_id = result[0].account_id;
        req.session.account_username = result[0].account_username;
        
        return res.status(200).send({message:"Logged in successfully", status:200, account_id: req.session.account_id});
    })
    
})

router.post('/logout', (req, res) => {
    req.session.destroy();
    return res.status(200).send({
        message:'Logged out successfully',
        status: 200
    });
})

/**
 * This post route creates an event based on the currently logged in user
 */
router.post('/event',  (req, res) => {
    const eventToAdd = [
        req.body.event_name,
        req.session.account_id, //This will always be the current session account_id
        req.body.sport_id, //Note: frontend has to figure our how to get sport_id from list
        req.body.total_players,
        req.body.date,
        req.body.time,
        req.body.location,
        1, //always at least 1
    ];
    
    const insertStatement =
        `INSERT INTO pickup_events
            (event_name, account_id, sport_id, maximum_players, event_location, event_date, event_time, current_players)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?) ;`;
    
    db.query(insertStatement, eventToAdd, (err, result) => {
        const event_id = result.insertId;
        const insertStatement =  
        `
        INSERT INTO player_event
            (account_id, event_id, is_leader)
            VALUES (?, ?, ?);
        `;
    
        db.query(insertStatement, [req.session.account_id, event_id, true], (err, result) => {
            if (err) {
                console.log(err)
            }
            return res.status(200).send({message: 'User has been added to the event!', status: 200});
        });
    })
    
})

router.get('/',  (req, res) => {
    if (req.session.account_id == null) {
        return res.status(200).send({status: 400, message: "Not authorized"})
    }
    const account_id = req.session.account_id;
    const query = `SELECT * FROM accounts WHERE account_id = ? ;`
    db.query(query, [account_id], (err, result) => {
        return res.status(200).send({data: result[0], status: 200})
    })
});

module.exports = router;