const { Router } = require('express');
const db = require('../config/databaseConfig')

const router = Router();

router.get('/', async (req, res) => {

    const query = `SELECT * FROM pickup_events`

    let events = await db.query(query, [req.params.id], (err, res) => {
        //handle any errors
    });

    if (events[0].length == 0) {
        return res.status(400).send("Not found");
    }

    return res.status(200).send(events[0]);
});

router.get('/:id', async (req, res) => {

    const query = `SELECT * FROM pickup_events WHERE event_id = ?`

    let events = await db.query(query, [req.params.id], (err, res) => {
        //handle any errors
    });

    if (events[0].length == 0) {
        return res.status(400).send("Not found");
    }

    return res.status(200).send(events[0]);
});

// Event deletion
router.get('/:id/delete', (req, res) => {
    // Possibly better solution here (like a cascade delete) but I'm not sure
    const query = `DELETE FROM pickup_events WHERE event_id = ?`

    db.query(query, [req.params.id], (err, res) => {
        if(err){
            return res.status(400).send("Error. Event cannot be found.")
        }

        //return res.status(200).send(Event deleted.);
        return res.redirect('/events');
    });
    
});

router.get('/:id/players', async (req, res) => {

    const query = `SELECT accounts.account_username, accounts.games_joined, accounts.games_attended FROM player_event 
    JOIN accounts ON player_event.account_id = accounts.account_id 
    WHERE event_id = ? `

    let events = await db.query(query, [req.params.id], (err, res) => {
        //handle any errors
    });

    if (events[0].length == 0) {
        return res.status(400).send("Not found");
    }

    return res.status(200).send(events[0]);
});

// Sends back list of events filtered by the sport entered in as query parameter
router.get('/sport', async (req, res) => {

    const query = `SELECT * FROM pickup_events WHERE sport_id = ?`

    let events = await db.query(query, [req.query.sport], (err, res) => {
        //handle any errors
    });

    if (events[0].length == 0) {
        return res.status(400).send("Not found");
    }
    
    return res.status(200).send(events[0]);
});

module.exports = router;