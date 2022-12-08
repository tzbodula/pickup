/**
 * This file is used for sports.
 */
const { Router } = require('express');
const db = require('../config/databaseConfig')
const checkSession = require('../utils/sessionChecker')

const router = Router();

// Gets all sports 
router.get('/', checkSession, (req, res) => {
    const query = `SELECT * FROM sports`

    db.query(query, (err, result) => {
        // handle any errors
        if (err) {
            return res.status(400).send({message:"Something went wrong", status:400})
        }

        return res.status(200).send({data: result, status:200})
    })
});

// Sends the list of this player's favorite sport
router.get('/favorite',  checkSession, (req, res) => {

    const query = `SELECT sports.sport_name, sports.sport_id FROM player_sport_favorite 
    JOIN sports ON player_sport_favorite.sport_id = sports.sport_id 
    WHERE account_id = ? ;`

    db.query(query, [req.session.account_id], (err, result) => {
        if (result === undefined || result.length == 0) {
            return res.status(400).send({message: "Not found", status: 400});
        }
    
        return res.status(200).send({data: result, status: 200});
    });
    
    
});

// Delete sport from user's favorite sports list
router.delete('/favorite',  checkSession, (req, res) => {

    const query = `DELETE FROM player_sport_favorite WHERE account_id = ? AND sport_id = ?;`

    db.query(query, [req.session.account_id, req.body.sport_id], (err, result) => {
        if (result === undefined || result.length == 0) {
            return res.status(400).send({message:"Error. User doesn't have this sport favorited.", status: 400})
        }
        return res.status(200).send({message: "Sport removed from favorites.",status: 200});
    });
    
    
});

// Adds sport to user's favorite sports list
router.post('/favorite',  checkSession, (req, res) => {

    const insertStatement =
        `INSERT INTO player_sport_favorite
            (account_id, sport_id)
            VALUES (?, ?) ;`;

    db.query(insertStatement, [req.session.account_id, req.body.sport_id], (err, result) => {
        if (result === undefined || result.length == 0) {
            return res.status(400).send({message:"Error. Cannot add same favorite sport twice.", status: 400})
        }
        return res.status(200).send({message: 'Favorite sport has been added!', status: 200});
    });
    
    
});

// Sends the list of this player's favorite sport
router.get('/:id/sports',  (req, res) => {

    const query = `SELECT sports.sport_name, sports.sport_id FROM player_sport_favorite 
    JOIN sports ON player_sport_favorite.sport_id = sports.sport_id 
    WHERE account_id = ? ;`

    db.query(query, [req.params.id], (err, result) => {
        if (result === undefined || result.length == 0) {
            return res.status(400).send({message: "Not found", status: 400});
        }

        return res.status(200).send({data: result, status: 200});
    });


});

module.exports = router;