const { Router } = require('express');
const db = require('../config/databaseConfig')

const router = Router();

router.get('/', (request, response) => {
    response.send("Welcome to the Events route");
})

router.get('/sport', async (request, response) => {
    let filteredEvents = await db.query("SELECT* FROM pickup_events WHERE sport_id = " + db.escape(request.query.sport));
    response.send(filteredEvents[0]);
})

module.exports = router;