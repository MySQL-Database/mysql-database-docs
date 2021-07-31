---
sidebar_position: 11
---

# All

All Method

### Table Of Sub Method

- [Parameters](#parameters)
- [Example Usage](#example-usage)
- [Returned Data](#returned-data)

### Parameters
- table (table name to get all of its data)
```js
all(table)
```

### Example Usage
```js
await db.all("my_table");
// -> retutn all the data in 'my_table' table
```

### Returned Data
Returns array of all the data stored in the provided table
```js
[
	{
		updated_at: 2021-06-18T03:37:16.000Z,
		created_at: 2021-06-18T03:37:16.000Z,
		ID: 'foo',
		data: 'bar'
	},
	{
		updated_at: 2021-06-18T03:37:16.000Z,
		created_at: 2021-06-18T03:37:16.000Z,
		ID: 'array',
		data: [ 'Value' ]
	},
	{
		updated_at: 2021-06-18T03:37:16.000Z,
		created_at: 2021-06-18T03:37:16.000Z,
		ID: 'count',
		data: 10
	}
]
```