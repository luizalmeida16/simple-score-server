
const Score = require('../Models/Score');

class ScoreController{
    constructor(){}

    async setScore(req, res) {
        const newScore = new Score({
            username: req.body.username, 
            score: Number(req.body.score)
        });
        
        try {
            let score = await newScore.save();
    
            return res.status(200).send(score);
        } catch(err) {
            return res.status(500).send(err + "body: " + req.body.username + " ");
        }
    }

    async getScores(req, res) {
        try {
            let scores = await Score.find();

            return res.status(200).send(scores);
        } catch(err) {
            return res.status(500).send(err);
        }
    }

}

module.exports = ScoreController;