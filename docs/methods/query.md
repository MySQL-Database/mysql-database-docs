---
sidebar_position: 13
---

# Query

Query Method

### Table Of Query Method

- [Parameters](#parameters)
- [Example Usage](#example-usage)
- [Returned Data](#returned-data)

### Parameters
- query (SQL query to execute)
```js
query(query)
```

### Example Usage
```js
await db.query("SELECT * from my_table;")
// -> executes a SQL query
```

### Returned Data
Returns the sql query returned data
```js
[
	{
		id: 2,
		key_name: 'array',
		value: '["Value"]',
		updated_at: 2021-06-17T04:00:49.000Z,
		created_at: 2021-06-17T04:00:49.000Z
		},
	{
		id: 3,
		key_name: 'count',
		value: '10',
		updated_at: 2021-06-17T04:00:49.000Z,
		created_at: 2021-06-17T04:00:49.000Z
	}
]
```