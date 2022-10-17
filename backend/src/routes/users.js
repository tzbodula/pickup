const { Router } = require('express');
const db = require('../config/databaseConfig')

const router = Router();

router.get('/', async (request, response) => {
    // Query that gets all the users
    let users = await db.query('SELECT * FROM accounts');
    response.send(users[0]);
})

router.get('/:id', async (req, res) => {
    let users = await db.query('SELECT * FROM accounts');
    response.send(users[0]);
})

// Sends back list of ids of all of the user's favorite sports
router.get('/:id/sports', async (req, res) => {
    let favoriteSportsQuery = await db.query('SELECT * FROM player_sport_favorite WHERE account_id = ' + db.escape(req.params.id));
    var favoriteSportsIDs = [];
    for(var index in favoriteSportsQuery[0]){
        favoriteSportsIDs.push(favoriteSportsQuery[0][index].sport_id);
    }
    res.send(favoriteSportsIDs);
})

module.exports = router;