const { Router } = require('express');
const db = require('../config/databaseConfig')

const router = Router();
// Sends back list of events filtered by the sport entered in as query parameter
router.get('/sport', async (req, res) => {
    let filteredEvents = await db.query(
    `SELECT * FROM pickup_events 
        WHERE sport_id = ` + db.escape(req.query.sport));

    res.send(filteredEvents[0]);
});

router.get('/:id', async (req, res) => {
    let events = await db.query(
    `SELECT * FROM pickup_events 
        WHERE event_id = ` + db.escape(req.params.id)
    );

    res.send(events[0]);
});



module.exports = router;