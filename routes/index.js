const express = require('express');
const router = express.Router();

router.get('/load_little', (req, res) => {
    res.json({user: '1234'});
});



module.exports = router;