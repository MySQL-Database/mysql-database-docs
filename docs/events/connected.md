---
sidebar_position: 1
---

# Connected

MySQL Class Connected Event

### Table Of MySQL Class Connected Event Contents

- [Example Listener](#example-listener)
- [Connection Response](#connection-response)

### Example Listener

```js
db.on("connected", function (connection) {
	console.log("Database Connected");
})
```

### Connection Response
```js
pool {
  pool: Pool {
    _events: [Object: null prototype] {},
    _eventsCount: 0,
    _maxListeners: undefined,
    config: PoolConfig {
      acquireTimeout: 10000,
      connectionConfig: [ConnectionConfig],
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    },
    _acquiringConnections: [],
    _allConnections: [],
    _freeConnections: [],
    _connectionQueue: [],
    _closed: false,
    [Symbol(kCapture)]: false
  }
}
```