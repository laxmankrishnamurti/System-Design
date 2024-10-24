# Web server

Tools or program that helps to keep the web application always up and running.

- Hardware
- Software
- Mixed of hardware and software

1. Hardware Servers

   - It is a Computer that store web server software and website's component files(HTML documents, images, CSS stylesheets, and Javascript files)
   - A web server is connected to the internet and helps to transport physical data interchange with other devices which is also connected to the same network.

2. Software Servers
   - A web servers includes several parts that control how web users access hosted files.
   - This is an HTTP server.
   - An HTTP server is software that understands URLs(web addresses) and HTTP(The protocol browsers uses to view webpages)
   - An HTTP server can be accessed through the domain names of the website it stores, and it delivers the content of these hosted website to the end user's device.

Ex :- Apache, Nginx

# Communication Protocol Models

Protocols are the rules or regualtions that both computers receiver and sender follows to exchange data over a network. These protocols can be implemented using hardware, software, or a combination of both.

1. Polling ===> Polling is a technique in web development where the client repeatedly sends requests to the server at regualr interval to check for updates or new data.

   - How Polling works?

     - Client push a request to the server
     - Server intercept the request and sends data(if available) or may send response without any payload
     - Client receive the data(if server has sent) or may push another reqeust.

   - Types of polling

     1. Regular Polling

        - In regular polling client push requests at fixed time intervals.
        - Simple to implement but cause unnecessary network calls

     2. Long polling
        - Client sends a reqeust to the server, but the server keeps the connection open until new data is available.
        - Once the server responds with the new data, the client immediately sends another request.
        - Reduce unneccessary network calls

   - Pros of Polling

     - Simple to implement.
     - Works with most browsers and technologies since it only requires basic HTTP requests.

   - Cons of Polling
     - In-efficient
     - Higher server loads
     - High latency

2. Push ===> This communication model is used to send notifications when user is not actively on the website.

3. WebSockets

   - 1st request raised by client for handshaking
   - 2nd server confirm the handshake
   - Full-duplex connection
   - This communication model is used to establish a persistent connection between user and client and it will not be terminated until the user itself dis-connect the connection.

4. Server-sent Events(SSE)
   - Unidirectional communication (One-way communication)
   - Only server can sent data to the client
