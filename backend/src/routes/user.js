/**
 * Use this file when we want to perform data related to the CURRENT user that is logged in.
 */
const { Router } = require('express');
const db = require('../config/databaseConfig')
const checkSession = require('../utils/sessionChecker')

const router = Router();

//TODO. using user sessions, obtain my information
router.get('/', checkSession, (req, res) => {
    return res.status(200).send('This is me. I am logged in');
});

router.post('/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password; //TODO hash the password and compare it to the password field in the DB

    const query = `SELECT account_id, account_username, email FROM accounts WHERE account_username = ? AND account_password = ?;`

    const userData = await db.query(query, [username, password], (err, res) => {
        //handle any errors
    })

    if (userData[0].length == 0) {
        console.log("Doesnt exist...");
        return res.status(401).send('Invalid credentials')
    }

    req.session.user_id = userData[0][0].account_id;
    req.session.account_username = userData[0][0].account_username;
    
    return res.status(200).send(userData[0]);
})

router.get('/logout', async (req, res) => {
    req.session.destroy();
    return res.status(200).send('Logged our successfully');
})

/**
 * This post route creates an event based on the currently logged in user
 */

router.post('/event', checkSession, async (req,res) => {
    const eventToAdd = [
        req.body.event_name,
        req.session.user_id, //This will always be the current session user_id
        req.body.sport_id, //Note: frontend has to figure our how to get sport_id from list
        req.body.total_players,
        req.body.date,
        req.body.time,
        req.body.location,
        1, //always at least 1
    ];

    
    let insertStatement =
        `INSERT INTO pickup_events
            (event_name, account_id, sport_id, maximum_players, event_location, event_date, event_time, current_players)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?) ;`;

    const dbResponse = await db.query(insertStatement, eventToAdd, (err, result) => {
        //handle errors
    })

    const event_id = dbResponse[0].insertId;
    
    insertStatement =  
        `
        INSERT INTO player_event
            (account_id, event_id, is_leader)
            VALUES (?, ?, ?);
        `;
    
    await db.query(insertStatement, [req.session.user_id, event_id, true], (err, res) => {
        //hanlde any errors
    })

    return res.status(200).send('Event added!');
    
})

module.exports = router;