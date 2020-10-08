const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    username: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    }
});

let ScoreModel = mongoose.model('score', schema);

module.exports = ScoreModel;