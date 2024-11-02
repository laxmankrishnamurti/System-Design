# For any technology or environment to provide server-like functionalities, it must have some level of access of hardware resources? Now, the question is who gives the power/facilities to Node.js to perform server-like functionalities?

- In the case of Node.js, it dosen't directly manage hardware but operate on top of **_libuv_**.

- **_libuv_** is a _C library_ that abstracts low-level I/O and operating system interactions. Libuv provides Node.js with access to :

  - Networking :: Handles network requests and connections
  - File systems :: Allow reading, writing and managing files
  - Asynchronous I/O :: Facilitates non-blocking I/O operations.

**Libuv manages these low-level tasks by interacting with the operating system, which then interfaces with the hardware. This is what gives Node.js the ability to function as a server. So, while Node.js itself doesn’t directly control the hardware, it uses libuv and the operating system to perform server functionalities.**
