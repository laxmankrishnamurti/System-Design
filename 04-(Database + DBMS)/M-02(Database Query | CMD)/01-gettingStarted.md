# Getting started

**Practice on terminal by downloading community edition**

## Let's get an overview how mongodb works internally?

- **Server make a request to the MongoDB server(that listen all queries and acts like a bridge between server and database)**
- **MongoDB server sent the request to the _Storage engine_**
- **Storage engine has the power to perform CRUD operations on the data which is stored in the disk**

**_flowchart_**

<code>Server -> MongoDB Server -> Storage engine -> Database</code>

### 1. Informational command

```bash
# Check version

$ mongod --version
```

```bash
db version v7.0.15
Build Info: {
    "version": "7.0.15",
    "gitVersion": "57939cc60865b0ce431c7e08c2589fa266a1a740",
    "openSSLVersion": "OpenSSL 3.0.2 15 Mar 2022",
    "modules": [],
    "allocator": "tcmalloc",
    "environment": {
        "distmod": "ubuntu2204",
        "distarch": "x86_64",
        "target_arch": "x86_64"
    }
}
```

### 2. To interact with mongodb database, first we need to start the mongodb server.

```bash
# Start mongo-shell

$ mongosh
```

### 3. Show all database

```bash
$ show dbs
```

### 4. Create a new databse

```bash
$ use <database_name>
```

### 5. Delete a database

```bash
# open the database which we want to delete
$ use <database_name>

# then run the cmd
$ db.dropDatabase()
```

### 6. Show collections

```bash
$ show collections
```

### 7. Create collections

```bash
$ db.createCollection('<collection_name>')
```

### 8. Delete collection

```bash
$ db.<collection_name>.drop()
```
