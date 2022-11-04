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
            return res.status(400).send({message: "Not found", status: 400});
        }
        console.log(result)
        return res.status(200).send({data: result, status: 200});
    });

});

router.get('/',  (req, res) => {

    const query = `SELECT * FROM pickup_events;`

    db.query(query, [req.params.id], (err, result) => {
        if (err) {
            //handle errors
        }
        return res.status(200).send({data: result, status: 200});
    });

});

// Event deletion
router.delete('/:id',  (req, res) => {

    // Validate
    const query = `SELECT * FROM pickup_events WHERE event_id = ?`

    if (!req.session.account_id) {
        return res.status(401).json({message: "unauthorized to make a delete", status: 401})
    }

    db.query(query, [req.params.id], (err, result) => {
        // Make sure that the user requesting this deletion is the actual logged in user
        if (result === undefined || result.length == 0 || result[0].account_id != req.session.account_id) {
            return res.status(401).json({message: "unauthorized to make a delete", status: 401})
        }

        const query = `DELETE FROM pickup_events WHERE event_id = ?`
        db.query(query, [req.params.id], (err, result) => {
            console.log(result)
            if (result === undefined || result.length == 0) {
                return res.status(400).send({message:"Error. Event cannot be found.", status: 400})
            }
            return res.status(200).send({message: "Event deleted.",status: 200});
        });
    })
    
});

// Join event
router.post('/:id/join',  (req, res) => {
    const query1 = `SELECT * FROM pickup_events WHERE event_id = ?`
    db.query(query1, [req.params.id], (err, result) => {
        if (result === undefined || result.length == 0) {
            return res.status(400).send({message: "Error. Couldn't find event.", status: 400})
        }

        if(result[0].currentplayers == result[0].maximum_players){
            return res.status(400).send({message: "Error. Event is already full.", status: 400})
        }

        const usertoJoin = [
            req.session.account_id,
            req.params.id,
            0
        ];
        
        const query2 = 
        `INSERT INTO player_event
            (account_id, event_id, is_leader)
            VALUES (?, ?, ?) ;`;
        db.query(query2, usertoJoin, (err, result) => {
            if (result === undefined || result.length == 0) {
                return res.status(400).send({message: "Error. Couldn't join event.", status: 400})
            }
            const query3 = `UPDATE pickup_events SET current_players = current_players + 1 WHERE event_id = ?;`
            db.query(query3, [req.params.id], (err, result) => {
                if (result === undefined || result.length == 0) {
                    return res.status(400).send({message: "Error. Couldn't increment current players in event.", status: 400})
                }
                return res.status(200).send({message: "Player joined event.", status: 200});
            });
        });
    });
            
});

router.post('/:id/leave', (req,res) => {

    const event_id = req.params.id;
    const validate_query = `SELECT * FROM player_event WHERE event_id = ? AND account_id = ?`

    db.query(validate_query, [event_id, req.session.account_id], (err, result) => {
        if (result === undefined || result.length == 0) {
            return res.status(404).send({message: "Can't find event", status: 404})
        }

        // Make sure that the person making this reqeust is the currently logged in user and not someone else.
        // Also make sure that the leader can't abandon his own event. He must delete it.
        if (result[0].account_id != req.session.account_id || result[0].is_leader) {
            return res.status(400).send({message:"Unauthorized to make this request", status: 400})
        }

        const leave_query = `DELETE FROM player_event WHERE event_id = ? AND account_id = ?`

        db.query(leave_query, [event_id, req.session.account_id], (err, result) => {
            if (err) {
                //handle errors
            }

            return res.status(200).send({message:"Event left successfully", status:200})
        })
    }) 
})


router.get('/:id',  (req, res) => {

    const query = `SELECT * FROM pickup_events WHERE event_id = ? ;`

    db.query(query, [req.params.id], (err, result) => {
        //handle any errors

        if (result === undefined || result.length == 0) {
            return res.status(400).send({message: "Not found", status: 400,});
        }
    
        return res.status(200).send({data: result, status: 200});
    });

    
});

router.get('/:id/players',  (req, res) => {

    const query = `SELECT accounts.account_id, accounts.account_username, accounts.games_joined, accounts.games_attended FROM player_event 
    JOIN accounts ON player_event.account_id = accounts.account_id 
    WHERE event_id = ? ;`

    db.query(query, [req.params.id], (err, result) => {
        if (result === undefined || result.length == 0) {
            return res.status(400).send({message:"Not found", status: 400});
        }
    
        return res.status(200).send({data: result, status: 200});
    });
    
});


/**
 * This post route creates an event based on the currently logged in user
 */
router.post('/',  (req, res) => {
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

module.exports = router;