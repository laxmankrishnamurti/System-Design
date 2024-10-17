# What is caching?

Caching is a way of storing data for a short period of time to reduce response time of the application. In every single application whether it is web-app or mobile app it uses caching to reduce network calls.

Actually what happens is let say user want to see their account details so they click on profile button and when they click it in the background there was a network call hits and server receive it and send the profile details. Think about the scenario where user either hits the profile button again-&-again or they refresh to app for so many times does it make sense to hit the same network calls again and again where no data has been changed yet?

Obviously not!

To solve the problem we use caching system in our application. In this process we store the information in the memory for short term like for 1min, 30sec, 2min,2h, 4h ..etc. So, when user hit the same reqeust again-and-again the request will not go directly to the server it first check whether the information is stored in the cache or not that the user wants? If yes, it send back the data from the memory and display it on the page.

CACHING HAPPENS IN THE RAM MEMORY(PRIMARY MEMORY) ===> FAST

# Types of caching?

Application server caching

1. In memory / Local cache ===> Stored in local server
   - Ex :- memcache
2. Distributed / External cache ===> Different nodes should share the same cache.
   - Ex :- Redis

# When to use caching?

1. Read extensive websites
2. Static content
   - Ex :- images, HTML, ....etc

# CDN (Content-delivery network)

This is also a type of chaching.
