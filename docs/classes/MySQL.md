---
sidebar_position: 1
---

# MySQL

MySQL Class Constructor

### Table Of MySQL Class Contents

- [Create Class](#create-class)
- [Class Events](#class-events)
- [Class Methods](#class-methods)

### Create Class

```js
const MySQL = require('mysql-database');
const database = new MySQL();
```

### Class Events
- [connected](/docs/events/connected)
- [dataModification](/docs/events/dataModification)
- [tableCreate](/docs/events/tableCreate)
- [tableDelete](/docs/events/tableDelete)
- [tableClear](/docs/events/tableClear)
- [tableRename](/docs/events/tableRename)

:::info Note
Events are only emitted if the action is taken from the library, which means if you manage the database from other connection, events would not work
:::

### Class Methods
- [connect](/docs/methods/connect)
- [set](/docs/methods/set)
- [get](/docs/methods/get)
- [base_set](/docs/methods/base_set)
- [base_get](/docs/methods/base_get)
- [push](/docs/methods/push)
- [pull](/docs/methods/pull)
- [includes](/docs/methods/includes)
- [add](/docs/methods/add)
- [sub](/docs/methods/sub)
- [all](/docs/methods/all)
- [delete](/docs/methods/delete)
- [tables](/docs/methods/tables)
- [rename](/docs/methods/rename)
- [stats](/docs/methods/stats)
- [query](/docs/methods/query)
- [auto_increment](/docs/methods/auto_increment)
- [create](/docs/methods/create)
- [drop](/docs/methods/drop)
- [clear](/docs/methods/clear)
- [variables](/docs/methods/variables)
- [ping](/docs/methods/ping)
- [process](/docs/methods/process)
- [end](/docs/methods/end)
- [exists](/docs/methods/exists)
- [create_db](/docs/methods/create_db)