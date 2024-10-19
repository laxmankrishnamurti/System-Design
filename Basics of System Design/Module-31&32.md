# Forward Proxy and Reverse Proxy

Proxy is also a hardware or a piece of sofware that acts as an intermediatery body between client and the actual server. In Client-Server architecture, when user pushs a reqeust to the server it actually reach to the proxy server and then proxy server intercept and do some operations to verify the reqeust and if it fines all are good then it transfer the reqeust to the actual backend server and then backend server process the reqeust and send appropriate response not directly to the user itself but rather than it sends the response to the proxy server and then proxy server sent the response to the cilent or the browser which made the reqeust.

The proxy server provides a gateway between the user and the internet.

## Types of Proxy Server

1. Forward Proxy
   - Client hits the proxy server
   - Proxy server takes the reqeust and hit the main server

In Forward proxy, the main server dosen't know who is the client. It only knows that the request is coming from the proxy server.

- Ex :- If a website is banned in India. How can we acceess it?
  - The answer is simple ===> Find the proxy server of the website
  - Once proxy server is available we don't need to hit the main server.
  - We should hit the proxy server and the server does all tasks and send appropriate results.
  - Because the main server only knows that the request is coming from the proxy server not from the specific region where the site is blocked.

_In short, Forward proxy hides the client_

2. Reverse Proxy

We use reverse proxy when we want to divert a reqeust to some other servers. Becasue, for a big application a single server cannot handles millions of reqeusts so we must divert the user reqeust to differen-different servers.

This task is done by Reverse Proxy. We can make different-different configuration files for different api-end points and divert the reqeuest to different servers.

## When to use Reverse Proxy?

- When we don't want to expose the server
- Provide load balancing for the server
- Allow administrators to swap the backend servers without disturbing the traffic
- Filter out some requests
