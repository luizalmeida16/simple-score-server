# simple-score-server
A simple score server - its just an example of a simple web API

## Requirements to run the API
* Docker -> (https://www.docker.com/)

## Installation
Clone this repository and then install the project with the following command:
* docker-compose up

#### Run tests
Go to the project folder and run the following command:
* docker-compose run --rm app npm test

## Usage
After installation make the requests to the following endpoints:

POST localhost:9000/score to insert a score
GET localhost:9000/scores to retrieve all scores from database

##### Example

curl --location --request POST 'http://localhost:9000/score' \
--header 'Content-Type: application/json' \
--data-raw '{
	"name": "user test",
	"score": 400
}'

should create a register with name  user test and score of 400. 


## This Software was buit using the following technologies:
- Docker
- Node.js
- MongoDB
- Express
- Mocha
