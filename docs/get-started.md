---
sidebar_position: 1
---

# Getting Started

Get started with the most powerful database for your project that can handle billion of users

<br/>

<center>

[<img src="https://cdn.discordapp.com/attachments/858540031160877077/863418307109453874/1200px-MySQL.png" alt="Logo" title="MySQL Database" width="60%" />](https://www.npmjs.com/package/mysql-database)

<br/>

[![](https://nodei.co/npm/mysql-database.png)](https://www.npmjs.com/package/mysql-database) 

[![NPM version](https://img.shields.io/npm/v/mysql-database.svg?maxAge=3600)](https://www.npmjs.com/package/mysql-database) [![NPM downloads](https://img.shields.io/npm/dt/mysql-database.svg?maxAge=3600)](https://www.npmjs.com/package/mysql-database)

[MySQL Database](https://www.npmjs.com/package/mysql-database)
</center>

### Table Of Getting Started Contents

- [About](#about)
- [Installation](#installation)
- [Example Usage](#example-usage)

### About 

- Easily modify your MySQL database data with easy functions
- Useful for websites & large projects where it makes managing data easier & faster
- Supports the Promise-API, you will be able to use .then, .catch, await, etc...
- & more...

### Installation

``
npm i mysql-database
``

### Example Usage 

```js
const MySQL = require('mysql-database');
const database = new MySQL();

run()
async function run() {
	let db = await database.connect({
		host: 'localhost',
		port: '3306', // the default is 3306
		user: 'root',
		password: '',
		database: 'my_database',
		charset: 'utf8mb4'
	})
	db.on('connected', () => {
		console.log('Database Connected');
	})
	
	await db.set("my_table", "foo", "bar");
	// -> Stores 'bar' in 'foo' key name in the table 'my_table'
	
    let data = await db.get("my_table", "foo");
	console.log(data); // bar
	// -> Gets foo key name value (which is bar) in the table 'my_table'
	
	await db.delete("my_table", "foo");
	// -> delete foo key in 'my_table' table
}
```