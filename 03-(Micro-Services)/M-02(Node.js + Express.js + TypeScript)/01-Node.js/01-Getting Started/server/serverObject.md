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

When we call createServer, we’re essentially creating an instance of _http.Server_, which has _listen_, _close_, and other methods because of inheritance.

### Key Properties of `http.Server`

1. **maxHeaderSize**: Specifies the maximum size of HTTP headers in bytes. If headers exceed this size, the server will reject the request. Undefined by default, it’s configurable in the server options.

2. **insecureHTTPParser**: Controls whether the HTTP parser should allow non-standard HTTP headers and relaxed header formatting. It’s set to `undefined` by default, and when enabled, it could introduce vulnerabilities if misused.

3. **requestTimeout**: The timeout in milliseconds for receiving an entire request. By default, it’s set to 5 minutes (300,000 ms). If the request isn’t completed within this time, the server will automatically close the connection.

4. **headersTimeout**: The maximum time allowed for reading request headers (default: 60,000 ms). If headers aren’t received within this limit, the server will terminate the connection.

5. **keepAliveTimeout**: The timeout for the server to keep a connection open after sending a response, to potentially reuse it for subsequent requests from the same client (default: 5,000 ms).

6. **connectionsCheckingInterval**: The interval in milliseconds at which the server checks open connections for activity, particularly useful for terminating inactive connections.

7. **requireHostHeader**: Determines if the `Host` header must be present in requests. If set to `true`, the server will reject requests without this header, adding a layer of security by requiring the header.

8. **joinDuplicateHeaders**: A property to handle duplicate headers; when enabled, it joins repeated headers into a single field, separated by commas.

9. **\_events**: Lists all event listeners currently registered on the server, like `request`, `connection`, and `listening`. These manage server behaviors when different events happen, such as handling incoming requests.

10. **\_connections**: Represents the current number of concurrent connections. This is useful for monitoring load on the server.

11. **allowHalfOpen**: Determines whether to keep the connection open if the client closes one end of the socket, useful for duplex streams.

12. **highWaterMark**: This is a buffer threshold that the server uses to determine when to apply backpressure to the client, essentially controlling the flow of data between the client and server.

13. **httpAllowHalfOpen**: Similar to `allowHalfOpen`, this specifically applies to HTTP connections, controlling whether the connection should remain open.

14. **timeout**: Sets the amount of time (in milliseconds) that the server will wait for inactivity before automatically ending a connection.

15. **[Symbol(IncomingMessage)]** and **[Symbol(ServerResponse)]**: These represent the constructors for the `IncomingMessage` and `ServerResponse` objects that Node.js uses internally to handle request and response data.

16. **[Symbol(async_id_symbol)]**: Tracks asynchronous operations for internal diagnostics and debugging.

### Inherited Properties and Methods

The `listen` method, along with others like `close`, comes from the `net.Server` and `EventEmitter` classes:

- **listen**: Binds the server to a specific port and starts listening for incoming connections.
- **close**: Stops the server from accepting new connections.
- **emit**: Triggers an event on the server.
- **on**: Registers an event handler.

These methods and properties are part of what allows the `server` instance to behave as a full HTTP server.

### Practical Use-Cases for Some Properties

- **headersTimeout** and **requestTimeout** are useful in protecting the server from slowloris attacks, where an attacker holds the connection open to exhaust resources.
- **keepAliveTimeout** helps maintain fast response times for clients by reusing existing connections when possible.
- **requireHostHeader** adds an extra security check to ensure only well-formed HTTP requests are processed.

By understanding each of these properties, you can fine-tune your server configuration to be efficient and secure based on your specific needs.

###

## **[Symbol(IncomingMessage)]** and **[Symbol(ServerResponse)]**

In Node.js, the **[Symbol(IncomingMessage)]** and **[Symbol(ServerResponse)]** properties refer to the constructors for the **`IncomingMessage`** and **`ServerResponse`** classes, respectively. These classes are essential for handling HTTP requests and responses, and these symbols essentially represent the functions that create these objects internally in Node.js.

Here’s what each of these classes does and why they’re important:

### 1. **IncomingMessage**

- **What It Is**: `IncomingMessage` is the class used by Node.js to represent the incoming HTTP request. Whenever a client (like a web browser) sends a request to your Node.js server, an instance of this `IncomingMessage` class is created. This instance holds all the details about the request.
- **What It Contains**:
  - **HTTP Headers**: `req.headers` contains an object representing the headers sent by the client.
  - **URL**: `req.url` is the URL path requested by the client.
  - **HTTP Method**: `req.method` tells you if it’s a GET, POST, PUT, DELETE, etc., request.
  - **Request Body**: `req.on('data')` and `req.on('end')` can be used to read the request body (for POST or PUT requests).
- **Purpose**: This `IncomingMessage` object allows your server to read and handle the incoming data from the client.

### 2. **ServerResponse**

- **What It Is**: `ServerResponse` is the class used by Node.js to create the outgoing response sent back to the client. When your server processes a request and is ready to send data back, it uses an instance of `ServerResponse`.
- **What It Contains**:
  - **Status Code**: `res.statusCode` lets you set the HTTP status code (e.g., 200 for success, 404 for not found).
  - **Response Headers**: `res.setHeader()` allows you to specify headers to send back to the client.
  - **Response Body**: `res.write()` and `res.end()` are used to write data and complete the response.
- **Purpose**: This `ServerResponse` object enables your server to respond to the client with data, headers, and status codes.

### Symbols in Node.js

The **symbols** you see in `[Symbol(IncomingMessage)]` and `[Symbol(ServerResponse)]` are a unique way to reference properties. Symbols are special identifiers that allow Node.js to reference these constructors without exposing them as regular properties. This avoids conflicts and ensures these properties are only accessed internally by the HTTP server.

In summary:

- **[Symbol(IncomingMessage)]** and **[Symbol(ServerResponse)]** are internal references to the constructors for handling HTTP requests and responses.
- They are crucial for the server’s functionality but are hidden from direct access to maintain encapsulation and prevent interference with these internal mechanisms.
- It means we cannot call or access both of them like regular methods or properties. They are only used by node.js internals to manage HTTP requests and responses.
