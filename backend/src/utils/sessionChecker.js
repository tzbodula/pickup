const checkSession = (req, res, next) => {

    // If a session is not in place...
    if (req.session.user_id === undefined) {
        return res.status(401).send('unauthorized');
    }

    next();
}

module.exports = checkSession;