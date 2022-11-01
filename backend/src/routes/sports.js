/**
 * This file is used for operations on OTHER users, NOT the current user.
 */
 const { Router } = require('express');
 const db = require('../config/databaseConfig')
 const checkSession = require('../utils/sessionChecker')
 
 const router = Router();
 
 router.get('/', (req, res) => {
    const query = `SELECT * FROM sports`

    db.query(query, (err, result) => {
        // handle any errors
        if (err) {
            return res.status(400).send({message:"Something went wrong", status:400})
        }

        return res.status(200).send({data: result, status:200})
    })
 })
 
 module.exports = router;