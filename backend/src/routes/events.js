const { Router } = require('express');
const db = require('../config/databaseConfig')

const router = Router();

router.get('/', (request, response) => {
    response.send("Welcome to the Events route");
})

router.get('/:id', async (req, res) => {
    let id = req.params.id
    let events = await db.query("SELECT * FROM pickup_events WHERE event_id = " + db.escape(id));
    res.send(events[0]);
})

// Sends back list of events filtered by the sport entered in as query parameter
router.get('/sport', async (request, response) => {
    let filteredEvents = await db.query("SELECT* FROM pickup_events WHERE sport_id = " + db.escape(request.query.sport));
    response.send(filteredEvents[0]);
})

module.exports = router;