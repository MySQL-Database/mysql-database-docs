---
sidebar_position: 1
---

# Connect

Connect Method

### Table Of Connect Method

- [Parameters](#parameters)
- [Example Usage](#example-usage)
- [Returned Data](#returned-data)

### Parameters
- config_object (object of database config to connect to)
```js
connect(config_object)
```

### Example Usage
```js
const MySQL = require('mysql-database');
const database = new MySQL();

let db = await database.connect({
	host: 'localhost',
	port: '3306', // the default is 3306
	user: 'root',
	password: '',
	database: 'my_database',
	charset: 'utf8mb4'
})

// the rest of your code of managing your database (db.set, db.get)
```

### Returned Data
Returns the db object to modify your database
```js
MySQL {
	_events: [Object: null prototype] {},
	_eventsCount: 0,
	_maxListeners: undefined,
	name: 'mysql-database',
	version: '1.2.3',
	connect: [AsyncFunction],
	query: [AsyncFunction],
	get: [AsyncFunction],
	set: [AsyncFunction],
	push: [AsyncFunction],
	includes: [AsyncFunction],
	pull: [AsyncFunction],
	add: [AsyncFunction],
	sub: [AsyncFunction],
	subtract: [AsyncFunction],
	delete: [AsyncFunction],
	all: [AsyncFunction],
	tables: [AsyncFunction],
	rename: [AsyncFunction],
	stats: [AsyncFunction],
	auto_increment: [AsyncFunction],
	create: [AsyncFunction],
	drop: [AsyncFunction],
	variables: [AsyncFunction],
	process: [AsyncFunction],
	ping: [AsyncFunction],
	db: pool {
		pool: Pool {
			_events: [Object: null prototype] {},
			_eventsCount: 0,
			_maxListeners: undefined,
			config: [PoolConfig],
			_acquiringConnections: [],
			_allConnections: [],
			_freeConnections: [],
			_connectionQueue: [],
			_closed: false,
			[Symbol(kCapture)]: false
		}
	},
	[Symbol(kCapture)]: false
}
```