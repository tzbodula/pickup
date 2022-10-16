const { Router } = require('express');
const db = require('../config/databaseConfig')

const router = Router();

router.get('/', async (request, response) => {
    let events = await db.query('SELECT * FROM pickup_events');
    response.send(events[0]);
})

router.get('/:id', async (req, res) => {
    let id = req.params.id
    let events = await db.query("SELECT * FROM pickup_events WHERE event_id = " + db.escape(id));
    res.send(events[0]);
})

module.exports = router;