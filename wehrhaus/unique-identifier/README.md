# Unique Identifier Service

This service provides functions for generating _Version 4 Random Unique Identifiers_ or **GUID** / **UUID**'s.

## generate

### Usage

#### Command Line

Returns a 128-bit randomly-generated integer for use as a GUID (or UUID).

```bash
$ lib wehrhaus.unique-identifier.generate
```

This returns a GUID (or UUID) with the following format:

```json
xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx
```

#### HTTP GET
Returns a 128-bit randomly-generated integer for use as a GUID (or UUID).
```http
https://f.stdlib.com/wehrhaus/unique-identifier/generate
```

####  Web and Node.js
```js
const f = require('f');
f('wehrhaus.unique-identifier.generate')({}, (err, response) => {
  // handle error or response
});
```

## Reference
(https://en.wikipedia.org/wiki/Universally_unique_identifier)

## Author
Justin Wehrman
