# READ OPERATION

### 1. Find a documen

```bash
# enter into the database

$ db.<collection_name>.find({})
$ db.<collection_name>.findOne({})
```

### 2. Import external file data via cmd

```bash
# Path can be relative or obsolute

# file type ===> Contains only object data
$ mongoimport <path> -d <db_name> -c <collection_name>

# file type ===> Contains array of object
$ mongoimport <path> -d <db_name> -c <collection_name> --jsonArray
```

### 3. Export JSON data from mongodb disk storage to any file location within the system

```bash
$ mongoexport -d <db_name> -c <collection_name> -o <path or name with absolute or reference path location>
```
