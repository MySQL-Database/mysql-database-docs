---
sidebar_position: 23
---

# Process

Process Method

### Table Of Process Method

- [Parameters](#parameters)
- [Example Usage](#example-usage)
- [Returned Data](#returned-data)

### Parameters
No parameters existed for the method
```js
process()
```

### Example Usage
```js
await db.process();
// -> returns the processes/connections list
```

### Returned Data
Returns array of all active connections/processes
```js
[
	{
		Id: 2,
		User: 'system user',
		Host: '',
		db: null,
		Command: 'Daemon',
		Time: null,
		State: 'InnoDB purge worker',
		Info: null,
		Progress: 0
	},
	{
		Id: 3,
		User: 'system user',
		Host: '',
		db: null,
		Command: 'Daemon',
		Time: null,
		State: 'InnoDB purge worker',
		Info: null,
		Progress: 0
	},
	{
		Id: 4,
		User: 'system user',
		Host: '',
		db: null,
		Command: 'Daemon',
		Time: null,
		State: 'InnoDB purge worker',
		Info: null,
		Progress: 0
	},
	{
		Id: 1,
		User: 'system user',
		Host: '',
		db: null,
		Command: 'Daemon',
		Time: null,
		State: 'InnoDB purge coordinator',
		Info: null,
		Progress: 0
	},
	{
		Id: 5,
		User: 'system user',
		Host: '',
		db: null,
		Command: 'Daemon',
		Time: null,
		State: 'InnoDB shutdown handler',
		Info: null,
		Progress: 0
	},
	{
		Id: 253,
		User: 'root',
		Host: 'localhost:61146',
		db: 'my_database',
		Command: 'Query',
		Time: 0,
		State: 'Init',
		Info: 'SHOW PROCESSLIST',
		Progress: 0
	}
]
```