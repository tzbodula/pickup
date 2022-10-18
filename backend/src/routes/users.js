const { Router } = require('express');
const db = require('../config/databaseConfig')

const router = Router();

router.get('/:id', async (req, res) => {
    let users = await db.query(
    `SELECT account_username, account_id, first_name, last_name FROM accounts 
        WHERE accounts.account_id = ` + db.escape(req.params.id));

    if (users[0].length == 0) {
        return res.status(400).send("Not found");
    }

    return res.status(200).send(users[0]);
});

// Sends back list of ids of all of the user's favorite sports
router.get('/:id/sports', async (req, res) => {
    let favoriteSportsQuery = await db.query(
    `SELECT sports.sport_name, sports.sport_id FROM player_sport_favorite 
        JOIN sports ON player_sport_favorite.sport_id = sports.sport_id 
        WHERE account_id = ` + db.escape(req.params.id));
    
    if (favoriteSportsQuery[0].length == 0) {
        return res.status(400).send("Not found");
    }

    return res.status(200).send(favoriteSportsQuery[0]);
});

module.exports = router;