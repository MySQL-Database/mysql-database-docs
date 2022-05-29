---
sidebar_position: 2
---

# Data Modification

MySQL Class Data Modification Event

### Table Of MySQL Class Data Modification Event Contents

- [Example Listener](#example-listener)
- [Event Parameters](#event-parameters)

### Example Listener

```js
db.on('dataModification', async event => {
	console.log(event);
});
```

### Event Parameters
- oldData (the data before the modification)
- newData (the data after the modification)
- type (data modification type - there are 3 different types which are SET,UPDATE,DELETE)
- table (the table in which the modification was made)
- modifiedAt (timestamp of when the modification taken action at)
```js
{
	oldData: 'bar',
	newData: 'bar2',
	type: 'UPDATE',
	table: 'test_table',
	modifiedAt: 1653815607288
}
```