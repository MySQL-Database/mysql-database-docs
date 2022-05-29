---
sidebar_position: 3
---

# Table Create

MySQL Class Table Create Event

### Table Of MySQL Class Table Create Event Contents

- [Example Listener](#example-listener)
- [Event Parameters](#event-parameters)

### Example Listener

```js
db.on('tableCreate', async table => {
	console.log(`Table ${table} Created`);
});
```

### Event Parameters
- table (table name)
```js
my_table
```