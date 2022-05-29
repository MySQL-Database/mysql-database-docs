---
sidebar_position: 5
---

# Table Clear

MySQL Class Table Clear Event

### Table Of MySQL Class Table Clear Event Contents

- [Example Listener](#example-listener)
- [Event Parameters](#event-parameters)

### Example Listener

```js
db.on('tableClear', async table => {
	console.log(`Table ${table} Data Cleared`);
});
```

### Event Parameters
- table (table name)
```js
my_table
```