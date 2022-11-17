/**
 * This file is associated with details related to creating events and deleting events and getting SURFACE LEVEL event information.
 * 
 */
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

    const query = `SELECT event_id, event_name, pickup_events.account_id, pickup_events.sport_id, maximum_players, current_players, event_location, event_date, event_time, account_username, sports.sport_name FROM pickup_events
    JOIN accounts ON pickup_events.account_id = accounts.account_id
    JOIN sports ON pickup_events.sport_id = sports.sport_id;
    `

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

router.get('/:id',  (req, res) => {
    const query = `SELECT * FROM pickup_events WHERE event_id = ? ;`
    db.query(query, [req.params.id], (err, result) => {
        //handle any errors

        if (result === undefined || result.length == 0) {
            return res.status(400).send({message: "Not found", status: 400});
        }
    
        return res.status(200).send({data: result[0], status: 200});
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
        req.body.city,
        req.body.state,
        1, //always at least 1
    ];
    
    const insertStatement =
        `INSERT INTO pickup_events
            (event_name, account_id, sport_id, maximum_players, event_date, event_time, event_location, event_city, event_state, current_players)
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

router.put('/:id/update', (req, res) => {

    const query = `SELECT * FROM pickup_events WHERE event_id = ?`
    db.query(query, req.params.id, (err, result) => {
        if (err) {
            console.log(err)
        }
        if (result === undefined || result.length == 0) {
            return res.status(400).send({message:"Event can't be found", status:400})
        }

        // Make sure the person making this request is the host
        if (result[0].account_id != req.session.account_id) {
            return res.status(401).send({message:"Unauthorized", status:401})
        }
        
        const eventToUpdate = [
            req.body.event_name,
            req.body.sport_id,
            req.body.maximum_players,
            req.body.event_location,
            req.body.event_date,
            req.body.event_time,
            req.params.id
        ]
        const updateQuery = `UPDATE pickup_events 
        SET event_name = ?, sport_id = ?, maximum_players = ?, event_location = ?, event_date = ?, event_time = ?
        WHERE event_id = ?`

        db.query(updateQuery, eventToUpdate, (err, result) => {

            if (err) {
                console.log(err)
            }

            return res.status(200).send({message:"Updated successfully", status:200})
        })
    })
})
module.exports = router;