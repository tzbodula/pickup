/**
 * Use this file when we want to perform data related to the CURRENT user that is logged in.
 */
const { Router } = require('express');
const db = require('../config/databaseConfig')

const router = Router();

//TODO. using user sessions, obtain my information
router.get('/', (req, res) => {
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
    
    return res.status(200).send(userData[0]);
})
module.exports = router;