---
sidebar_position: 6
---

# Table Rename

MySQL Class Table Rename Event

### Table Of MySQL Class Table Rename Event Contents

- [Example Listener](#example-listener)
- [Event Parameters](#event-parameters)

### Example Listener

```js
db.on('tableRename', async (oldName, newName) => {
	console.log(`Table renamed from ${oldName} to ${newName}`);
});
```

### Event Parameters
- oldName (table old name)
```js
my_table
```
- newName (table new name)
```js
renamed_table
```