# What happens when we call _createServer()_

```js
Server {
  maxHeaderSize: undefined,
  insecureHTTPParser: undefined,
  requestTimeout: 300000,
  headersTimeout: 60000,
  keepAliveTimeout: 5000,
  connectionsCheckingInterval: 30000,
  requireHostHeader: true,
  joinDuplicateHeaders: undefined,
  rejectNonStandardBodyWrites: false,
  _events: [Object: null prototype] {
    request: [Function (anonymous)],
    connection: [Function: connectionListener],
    listening: [Function: setupConnectionsTracking]
  },
  _eventsCount: 3,
  _maxListeners: undefined,
  _connections: 0,
  _handle: null,
  _usingWorkers: false,
  _workers: [],
  _unref: false,
  _listeningId: 1,
  allowHalfOpen: true,
  pauseOnConnect: false,
  noDelay: true,
  keepAlive: false,
  keepAliveInitialDelay: 0,
  highWaterMark: 16384,
  httpAllowHalfOpen: false,
  timeout: 0,
  maxHeadersCount: null,
  maxRequestsPerSocket: 0,
  [Symbol(IncomingMessage)]: [Function: IncomingMessage],
  [Symbol(ServerResponse)]: [Function: ServerResponse],
  [Symbol(shapeMode)]: false,
  [Symbol(kCapture)]: false,
  [Symbol(async_id_symbol)]: -1,
  [Symbol(kUniqueHeaders)]: null
}
```

The server object is indeed a complex object. The listen method, along with many others, is available to this object because it inherits from Node.js’s _EventEmitter_ and _net.Server classes_, which provide these additional functionalities. This is an example of prototypal inheritance in JavaScript.

When we call createServer, we’re essentially creating an instance of _http.Server_, which has _listen_, _close_, and other methods due to this inheritance.
