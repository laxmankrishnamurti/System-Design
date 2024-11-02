# Introduction to Node.js

- **Open-source**
- **Cross-platform JavaScript runtime environment**
- **It runs V8 engine, which is the heart of google chrome, outside of the browser. It gives the capabilities to run JavaScript code anywhere.**
- **Libraries in Node.js are written using non-blocking paradigms that makes blocking behavious as an exception rather than a norm.**

- **It is single-threaded. What this mean? let's understand.**

  - Node.js indeed operates in a non-blocking, asynchronous way, allowing it to handle multiple requests efficiently on a single thread. Here’s a quick breakdown to reinforce this:

    **1. Single-Threaded, Event-Driven Model:** Node.js uses a single thread for executing JavaScript code. When an I/O operation (like reading from the database) is initiated, Node.js doesn’t wait for the operation to finish.

    **2. Handling New Requests:** While waiting for the I/O response, Node.js is free to handle other incoming requests. This non-blocking nature allows it to serve multiple requests without idling.

    **3. Callback Execution:** When the I/O operation (like a database response) completes, Node.js uses the event loop to pick up the task again, executing any callback or promise related to the operation and resuming as if no delay occurred.

## An example of Node.js application

```js
const { createServer } = require("node:http");

const PORT = 3000;

const server = createServer((req, res) => {
  res.end("<h1>Hello world!</h1>");
});

console.log(server);

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

```json
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
