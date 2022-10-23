const { Router } = require('express');
const db = require('../config/databaseConfig')
const checkSession = require('../utils/sessionChecker')
const router = Router();


// Sends back list of events filtered by the sport entered in as query parameter
router.get('/sport', checkSession, (req, res) => {
    
    const query = `SELECT * FROM pickup_events WHERE sport_id = ? ;`
    db.query(query, [req.query.sport_id], (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        
        if (result === undefined || result.length == 0) {
            return res.status(400).send("Not found");
        }
        
        return res.status(200).send(result);
    });

});

router.get('/', checkSession, (req, res) => {

    const query = `SELECT * FROM pickup_events;`

    db.query(query, [req.params.id], (err, result) => {
        if (err) {
            //handle errors
        }
        return res.status(200).send(result);
    });

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

router.get('/:id', checkSession, (req, res) => {

    const query = `SELECT * FROM pickup_events WHERE event_id = ? ;`

    db.query(query, [req.params.id], (err, result) => {
        //handle any errors

        if (result === undefined || result.length == 0) {
            return res.status(400).send("Not found");
        }
    
        return res.status(200).send(result);
    });

    
});

router.get('/:id/players', checkSession, (req, res) => {

    const query = `SELECT accounts.account_username, accounts.games_joined, accounts.games_attended FROM player_event 
    JOIN accounts ON player_event.account_id = accounts.account_id 
    WHERE event_id = ? ;`

    db.query(query, [req.params.id], (err, result) => {
        if (result === undefined || result.length == 0) {
            return res.status(400).send("Not found");
        }
    
        return res.status(200).send(result);
    });
    
});


module.exports = router;