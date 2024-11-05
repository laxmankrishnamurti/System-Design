# Operators

```bash
# default sytax to apply operators in query

$ db.<collection_name>.find({'key': {$operator: value}})

# count the value
$ db.<collection_name>.find({'key': {$operator: value}}).count()
```

## Comparison Operators

```bash
# "$" sign is included

$ eq :: Equal to (=)
$ ne :: Not-equal to (! =)
$ gt :: Greater than (>)
$ gte:: Greater than equal to (>=)
$ lt :: Less than (<)
$ lte:: Less than equal to
$ in :: In  # For arrays
$ nin:: Not-in # For arrays
```

### Command

```bash
$ db.<collection_name>.find({'key': {$operator: value}})

# This will only give the document which key-value lies between the given value.
$ db.<collection_name>.find({'key': {$in: [60,80,120]}})
```
