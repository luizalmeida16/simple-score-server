const assert = require('assert');
const Db = require('../config/Db');
const mongoose = require('mongoose');
const Score = require('../Models/Score');
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const routes = require('../config/routes');
const request = require('request');

describe('db-test', () => {
    it('db-connection', function(done) {
        let db = new Db('mongo', '27017', 'test');
        db.connect().then(() => {
            assert.ok(true);
            done();
        }).catch((err) => {
            assert.ok(false);
        });
    });
    it('bd-test-insert', function(done) {
        const newScore = new Score({
            name: "test",
            score: 50
        });
        newScore.save().then(function(score) {
            assert.equal(score.name, "test");
            done();
        });
    });
    it('db-test-find', function(done) {
        Score.find().then(function(scores) {
            assert.equal(scores.length, 1);
            done();
        });
    });
});


describe('api-tests', () => {
    it('expose-api', function(done) {
        //This is the port running in the container
        const port = 3000;
        app.use(bodyParser.json());

        app.use('/', routes);
        app.listen(port, () => {
            assert.ok(true);
            done();
        });
    });

    it('insert-score', function(done) {
        let jsonData = {
            "name": "Jhon Doe",
            "score": 100
        };
        request.post({
            url: 'http://localhost:3000/score',
            body: jsonData,
            json: true
        }, function(err, response) {
            if(err) assert.ok(false, err);

            assert.equal(response.statusCode, 200);
            done();
        });
    });

    it('list-scores', function(done) {
        request.get('http://localhost:3000/scores',{json: true}, function(err, resp) {
            if(err) assert.ok(false, err);

            assert.equal(resp.body.scores[0].name, "Jhon Doe");
            done();
        });
    });
});

describe('remove-database', () => {
    it('remove-db', function(done) {
        mongoose.connection.db.dropDatabase();
        done()
    });
});



