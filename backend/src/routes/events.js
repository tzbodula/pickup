const { Router } = require('express');
const db = require('../config/databaseConfig')
const checkSession = require('../utils/sessionChecker')
const router = Router();


// Sends back list of events filtered by the sport entered in as query parameter
router.get('/sport',  (req, res) => {
    
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

router.get('/',  (req, res) => {

    const query = `SELECT * FROM pickup_events;`

    db.query(query, [req.params.id], (err, result) => {
        if (err) {
            //handle errors
        }
        return res.status(200).send(result);
    });

});

// Event deletion
router.post('/:id/delete',  (req, res) => {
    const query = `DELETE FROM pickup_events WHERE event_id = ?`

    db.query(query, [req.params.id], (err, result) => {
        if (result === undefined || result.length == 0) {
            return res.status(400).send("Error. Event cannot be found.")
        }

        return res.status(200).send("Event deleted.");
    });
    
});

// Join event
router.post('/:id/join',  (req, res) => {
    const query1 = `SELECT * FROM pickup_events WHERE event_id = ?`
    db.query(query1, [req.params.id], (err, result) => {
        if (result === undefined || result.length == 0) {
            return res.status(400).send("Error. Couldn't find event.")
        }
        if(result[0].currentplayers == result[0].maximum_players){
            return res.status(400).send("Error. Event is already full.")
        }
        const usertoJoin = [
            req.session.user_id,
            req.params.id,
            0
        ];
        const query2 = 
        `INSERT INTO player_event
            (account_id, event_id, is_leader)
            VALUES (?, ?, ?) ;`;
        db.query(query2, usertoJoin, (err, result) => {
            console.log(result[0]);
            if (result === undefined || result.length == 0) {
                return res.status(400).send("Error. Couldn't join event.")
            }
            const query3 = `UPDATE pickup_events SET current_players = current_players + 1 WHERE event_id = ?;`
            db.query(query3, [req.params.id], (err, result) => {
                if (result === undefined || result.length == 0) {
                    return res.status(400).send("Error. Couldn't increment current players in event.")
                }
                  
                return res.status(200).send("Player joined event.");
            });
        });
    });
            
});

router.get('/:id',  (req, res) => {

    const query = `SELECT * FROM pickup_events WHERE event_id = ? ;`

    db.query(query, [req.params.id], (err, result) => {
        //handle any errors

        if (result === undefined || result.length == 0) {
            return res.status(400).send("Not found");
        }
    
        return res.status(200).send(result);
    });

    
});

router.get('/:id/players',  (req, res) => {

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