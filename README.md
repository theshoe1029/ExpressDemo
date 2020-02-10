# Instructions

Navigate to the demo directory and use
```
npm install
```
to install the necessary libraries.
To start the server first fill in the database client object on line 6
```javascript
const client = new Client({
  user: ,
  host: ,
  database: ,
  password: ,
  port:
})
```
then use
```
node app.js
```
to start the demo.

The demo runs on ```http://localhost:3000``` by default

## Endpoints
### POST /write
Requests to this endpoint add data to the database. Requests are made using JSON in the following form
```json
{
	"data": [
		{
			"userId": "shoe",
			"timestamp": "Feb-9-2020",
			"score": 10,
			"module": 1
		},
		{
			"userId": "shoe2",
			"startTimestamp": "Feb-9-2020 10:00",
			"endTimestamp": "Feb-9-2020 10:01",
			"module": 2
		}
	]
}
```
Each element in the ```data``` array represents a row in either the module 1 or module 2 table.

### GET /db
This will get all the entries in both the module 1 and module 2 tables.
