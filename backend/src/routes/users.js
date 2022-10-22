const { Router } = require('express');
const db = require('../config/databaseConfig')

const router = Router();

router.post('/', async (req, res) => {
    // TODO hash the password before saving
    const userToAdd = [
        req.body.first_name,
        req.body.last_name,
        req.body.username,    
        req.body.password,
        req.body.email,
        0,
        0,
        0
    ];
    
    const query = `SELECT * FROM accounts WHERE account_username = ? OR account_password = ?`
    let existingAccounts = await db.query(query, [req.body.username, req.body.password], (err, res) => {
        //handle any errors
    });
    if(existingAccounts[0].length != 0){
        return res.status(400).send('Username or Password is already in use');
    }
    const insertStatement =
        `INSERT INTO accounts
            (first_name, last_name, account_username, account_password, email, games_joined, games_attended, rating)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

    await db.query(insertStatement, userToAdd);

    return res.status(200).send('Successful Creation');
})

router.get('/:id', async (req, res) => {

    const query = `SELECT account_username, account_id, first_name, last_name FROM accounts 
    WHERE accounts.account_id = ?`

    const users = await db.query(query, [req.params.id], (err, res) => {
        // Handle any errors
    });

    if (users[0].length == 0) {
        return res.status(400).send("Not found");
    }

    return res.status(200).send(users[0]);
});

// Sends back list of ids of all of the user's favorite sports
router.get('/:id/sports', async (req, res) => {

    const query = `SELECT sports.sport_name, sports.sport_id FROM player_sport_favorite 
    JOIN sports ON player_sport_favorite.sport_id = sports.sport_id 
    WHERE account_id = ? `

    let favoriteSportsQuery = await db.query(query, [req.params.id], (err, res) => {
        // Handle any errors
    });
    
    if (favoriteSportsQuery[0].length == 0) {
        return res.status(400).send("Not found");
    }

    return res.status(200).send(favoriteSportsQuery[0]);
});

module.exports = router;