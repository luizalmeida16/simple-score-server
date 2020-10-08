const express = require("express");
const router = express.Router();
const ScoreController = require('../Controllers/ScoreController');

let scoreController = new ScoreController();

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.post('/score', (req, res) => scoreController.setScore(req, res));
router.get('/scores', (req, res) => scoreController.getScores(req, res));

module.exports = router