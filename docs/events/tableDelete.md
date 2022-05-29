---
sidebar_position: 4
---

# Table Delete

MySQL Class Table Delete Event

### Table Of MySQL Class Table Delete Event Contents

- [Example Listener](#example-listener)
- [Event Parameters](#event-parameters)

### Example Listener

```js
db.on('tableDelete', async table => {
	console.log(`Table ${table} Deleted`);
});
```

### Event Parameters
- table (table name)
```js
my_table
```