const { Router } = require('express');
const db = require('../config/databaseConfig')

const router = Router();

router.get('/:id', async (req, res) => {
    let users = await db.query(
    `SELECT * FROM accounts 
        WHERE accounts.account_id = ` + db.escape(req.params.id));

    res.send(users[0]);
});

// Sends back list of ids of all of the user's favorite sports
router.get('/:id/sports', async (req, res) => {
    let favoriteSportsQuery = await db.query(
    `SELECT sports.sport_name, sports.sport_id FROM player_sport_favorite 
        JOIN sports ON sports.sport_id = player_sport_favorite.sport_id 
        WHERE account_id = ` + db.escape(req.params.id));
    
    res.send(favoriteSportsQuery[0]);
});

module.exports = router;