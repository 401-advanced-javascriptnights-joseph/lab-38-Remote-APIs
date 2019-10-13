# LAB - 38

## Remote APIs

### Author: Joseph Hangarter

### Links and Resources
* [submission PR](http://xyz.com)

### Modules
#### `modulename.js`
##### Exported Values and Methods

###### `foo(thing) -> string`
Usage Notes or examples

###### `bar(array) -> array`
Usage Notes or examples

### Setup
#### `.env` requirements
* `REACT_APP_API` 
* `REACT_APP_SECRET` 
* `REACT_APP_Q_SERVER`

#### Running the app
* `npm start`
* Endpoint: `https://api-js401.herokuapp.com/api/v1/todo`
  * Returns a JSON object with `count`, `results` -> [ `difficulty`: int, `complete`: boolean, `_id`: string, `text`: string, `assignee`: string, `due`: string, `__v`: string ].
```
{  
  "count": 6,
  "results": [
  {
    "difficulty": 3,
    "complete": true,
    "_id": "5da25d1cd77c3700175410d7",
    "text": "Hi John",
    "assignee": "John",
    "due": "2019-10-12T00:00:00.000Z",
    "__v": 0
  }
}

