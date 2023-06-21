---
sidebar_position: 26
---

# Create DB

Create Database Method

### Table Of Create DB Method

- [Parameters](#parameters)
- [Example Usage](#example-usage)
- [Returned Data](#returned-data)

### Parameters
- database_name (New Database Name)
```js
create_db(database_name)
```

### Example Usage
```js
await db.create_db('database_name', 'foo');
// -> Creates a separate database on the server
```

### Returned Data
Returns true if the database has been created successfully
```js
true
```

:::info Note
This will <span class="optional">NOT</span> overwrite an existing database<br/>
This will only create the database if it's <span class="optional">NOT EXISTED</span><br/>
You need to create a [new connection](/docs/methods/connect) manually after creating a new database<br/>
If you had an old events, you need to re-register the events since this is a new class created<br/>
:::