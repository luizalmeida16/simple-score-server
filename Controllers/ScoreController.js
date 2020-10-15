
const Score = require('../Models/Score');

class ScoreController{
    constructor(){}

    async setScore(req, res) {
        const newScore = new Score({
            name: req.body.name, 
            score: Number(req.body.score)
        });
        
        try {
            let score = await newScore.save();
    
            return res.status(200).send(score);
        } catch(err) {
            return res.status(500).send(err);
        }
    }

    async getScores(req, res) {
        try {
            let scores = await Score.find();

            return res.status(200).send({scores: scores});
        } catch(err) {
            return res.status(500).send(err);
        }
    }

}

module.exports = ScoreController;