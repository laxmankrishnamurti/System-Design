# Synchronous Communication

The communication that happen synchronously(immediate execution). It means execution of code is happening sequencly. To be more precise such type of communication will not take too many times or network calls. It is a type of blocking calls means next line of code would not execute until it's previous code will not executed.

It dosen't depends on any network calls.

## Use-cases

1. Consistency ===> Data will be same in all replicas. Hence, no bad reads will happen.
2. Transaction

## Industrial use-cases

- Stock market
- Bank payments
- Ticket Booking
- Real time decision making

# Asynchronous Communication

The communication that will take time to happen call "Asynchronous communication"(non-blocking communication). In asynchronous communication things always depends on some network calls which is responsible for fetching data from servers, database, ....etc and it will take time to get those data and take over to the other parties to complete that task.

While network call is happening all synchronous task will also happening simulteniously.

It depends on network calls.

## Use-case

- Computation takes a lot of time
- Scalability of application
- Avoid cascading failure(overwhelming communication)
