/**
 * This file is associated with the currently logged in user and maintaing a session.
 * 
 * This is different from users.js because users.js does not take into account the currrently logged in user for the most part.
 * 
 */
const { Router } = require('express');
const db = require('../config/databaseConfig')
const checkSession = require('../utils/sessionChecker')
const bcryptjs = require('bcryptjs');

const router = Router();

router.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    
    console.log("Attempting to login from the backend!")

    const query = `SELECT account_id, account_username, email, account_password, games_joined, games_attended, rating, bio FROM accounts WHERE account_username = ?;`

    db.query(query, [username], (err, result) => {
        
        if (result === undefined || result.length == 0) {
            return res.status(401).send({message: "Invalid credentials", status: 401})
        }

        if (!bcryptjs.compareSync(password, result[0].account_password)) {
            return res.status(401).send({message: "Invalid credentials",status: 401})
        }

        req.session.account_id = result[0].account_id;
        req.session.account_username = result[0].account_username;
        
        return res.status(200).send({message:"Logged in successfully", status:200, account_id: req.session.account_id, 
        account_username: result[0].account_username, email: result[0].email, games_joined: result[0].games_joined, 
        games_attended: result[0].games_attended, rating: result[0].rating, bio: result[0].bio});
    })
    
})

router.get('/getEvents',  checkSession, (req, res) => {
    
    //console.log("We are getting the command still");

    const query = `SELECT * FROM player_event
    JOIN pickup_events ON pickup_events.event_id = player_event.event_id
    WHERE player_event.account_id = ?
    ;`

    db.query(query, [req.session.account_id], (err, result) => {
        //handle any errors

        if (result === undefined || result.length == 0) {
            return res.status(400).send({message: "Not found", status: 400});
        }
    
        return res.status(200).send({data: result, status: 200});
    });
    
});

router.post('/logout', (req, res) => {
    req.session.destroy();
    return res.status(200).send({message:'Logged out successfully',status: 200});
})

// Update Username and Bio of User's Profile
router.put('/updateProfile', checkSession, (req, res, next) => {
    const query = `SELECT * FROM accounts WHERE account_username = ?;`
    db.query(query, [req.body.newUsername], (err, result) => {
        // If there exists a user that comes up with that username
        if (result[0]) {
            // Then if that person is not the same person logged in this username already is taken
            if (result[0].account_id != req.session.account_id) {
                return res.status(400).send({message: 'Username is already in use', status:400});
            }
        }
        next();
    });

}, (req, res) => {
    const updateStatement =`UPDATE accounts SET account_username = ?, bio = ? WHERE account_id = ?;`
    db.query(updateStatement, [req.body.newUsername, req.body.newBio, req.session.account_id], (err, result) => {
        //Handle any errors
        req.session.username = req.body.newUsername;
        return res.status(200).send({message:'Update Successful', status:200}); 
    });
}
);

router.get('/',  checkSession, (req, res) => {
    const query = `SELECT account_username, games_joined, games_attended, rating, bio FROM accounts WHERE account_id = ? ;`
    db.query(query, [req.session.account_id], (err, result) => {
        return res.status(200).send({data: result[0], status: 200})
    })
});

router.get('/sports', checkSession, (req, res) => {
    const query = `SELECT * FROM player_sport_favorite
    JOIN sports ON player_sport_favorite.sport_id = sports.sport_id
    WHERE player_sport_favorite.account_id = ? ;`
    db.query(query, [req.session.account_id], (err, result) => {
        return res.status(200).send({data: result})
    })
})

router.delete('/', (req, res)=>{
    const query= 'DELETE FROM accounts WHERE account_id = ?;'
    let usr = req.session.account_id
    if (req.session.account_id == null) {
        return res.status(200).send({status: 400, message: "Invalid operation"})
    }
    db.query(query, req.session.account_id, (err, result) => {
        req.session.destroy();
        return res.status(200).send({message:'account deleted', status: 200})
    })
})

// Update user password
router.put('/updatePassword', checkSession, (req, res, next) => {
    const query = `SELECT * FROM accounts WHERE account_id = ?;`
    const password = req.body.password
    const numSaltRounds = 8;
    const hash_password = bcryptjs.hashSync(password, numSaltRounds);

    db.query(query, [req.session.account_id], (err, result) => {
        //handle any errors
        if  (result === undefined || result.length == 0) {
            return res.status(400).send({message: 'User not found', status:400});
        }
        next();
    });
}, (req, res) => {
    const updateStatement =`UPDATE accounts SET account_password = ? WHERE account_id = ?;`
    db.query(updateStatement, [hash_password, req.session.account_id], (err, result) => {
        //Handle any errors
        return res.status(200).send({message:'Update Successful', status:200});
    });
}
);

module.exports = router;