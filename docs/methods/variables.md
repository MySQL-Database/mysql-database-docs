---
sidebar_position: 21
---

# Variables

Variables Method

### Table Of Variables Method

- [Parameters](#parameters)
- [Example Usage](#example-usage)
- [Returned Data](#returned-data)

### Parameters
- variables_object (the variables object to modify)
```js
variables(variables_object)
```

### Example Usage
```js
await db.variables({ 
	max_connections: 100000,
	max_connect_errors: 100000,
	wait_timeout: 60
});
// -> modifies any global variable
```

### Returned Data
Returns the modified variables object
```js
{ 
	max_connections: 100000,
	max_connect_errors: 100000,
	wait_timeout: 60
}
```