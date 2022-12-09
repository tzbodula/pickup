const { Router } = require('express');
const db = require('../config/databaseConfig')
const checkSession = require('../utils/sessionChecker')
const router = Router();

/**
 * This class file is related to performing more operations with junction tables. Specifically, this class has a lot more JOIN operations
 * and you can think of this as being the class that performs operations when you have a specific event in mind.
 */
router.post('/:event_id/join',  checkSession, (req, res, next) => {
    const query = `SELECT * FROM pickup_events WHERE event_id = ?`
    db.query(query, [req.params.event_id], (err, result) => {

        if (result === undefined || result.length == 0) {
            return res.status(400).send({message: "Error. Couldn't find event.", status: 400})
        }

        console.log(result[0].current_players == result[0].maximum_players)
        if(result[0].current_players == result[0].maximum_players){
            return res.status(400).send({message: "Error. Event is already full.", status: 400})
        }
    
        next();
    });

}, (req, res, next) => {
    const usertoJoin = [req.session.account_id, req.params.event_id, 0];
    const query = `INSERT INTO player_event(account_id, event_id, is_leader) VALUES (?, ?, ?) ;`;
    db.query(query, usertoJoin, (err, result) => {
        if (result === undefined || result.length == 0) {
            return res.status(400).send({message: "Error. Couldn't join event.", status: 400})
        }
        next();
    });
}, (req, res) => {
    const query = `UPDATE pickup_events SET current_players = current_players + 1 WHERE event_id = ?;`
    db.query(query, [req.params.event_id], (err, result) => {
        if (result === undefined || result.length == 0) {
            return res.status(400).send({message: "Error. Couldn't increment current players in event.", status: 400, username: req.session.account_username})
        }
        return res.status(200).send({message: "Player joined event.", status: 200});
    });
}
);

router.delete('/:event_id/leave', checkSession, (req, res, next) => {
    const validate_query = `SELECT * FROM player_event WHERE event_id = ? AND account_id = ?`
    db.query(validate_query, [req.params.event_id, req.session.account_id], (err, result) => {
        if (result === undefined || result.length == 0) {
            return res.status(404).send({message: "Can't find event", status: 404})
        }

        // Make sure that the person making this reqeust is the currently logged in user and not someone else.
        // Also make sure that the leader can't abandon his own event. He must delete it.
        if (result[0].account_id != req.session.account_id || result[0].is_leader) {
            return res.status(400).send({message:"Unauthorized to make this request", status: 400})
        }

        next();
    }) 
}, (req, res, next) => {
    const leave_query = `DELETE FROM player_event WHERE event_id = ? AND account_id = ?`
    db.query(leave_query, [req.params.event_id, req.session.account_id], (err, result) => {
        if (err) {
            //handle errors
        }
        next();
    })
}, (req, res) => {
    const update = `UPDATE pickup_events SET current_players = current_players - 1 WHERE event_id = ?;`
    db.query(update, [req.params.event_id], (err, result) => {
        if (result === undefined || result.length == 0) {
            return res.status(400).send({message: "Error. Couldn't increment current players in event.", status: 400, username: req.session.account_username})
        }
        return res.status(200).send({message:"Event left successfully", status:200})
    });
});

router.get('/:event_id/players', checkSession, (req, res) => {

    const query = `SELECT accounts.account_id, accounts.account_username, accounts.games_joined, accounts.rating, accounts.games_attended, is_leader FROM player_event 
    JOIN accounts ON player_event.account_id = accounts.account_id 
    WHERE event_id = ? ;`

    db.query(query, [req.params.event_id], (err, result) => {
        if (result === undefined || result.length == 0) {
            return res.status(400).send({message:"Not found", status: 400});
        }
    
        return res.status(200).send({data: result, status: 200});
    });
    
});

module.exports = router;