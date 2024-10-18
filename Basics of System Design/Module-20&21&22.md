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

# Message based communication

In this communication:-

- Client sends request in the form of message
- receives response in the form of message
- It is an asynchronous communication, so client is not required to halt the process and wait for the response.

There are three terms which is used in this definition

1. Producer
2. Consumer
3. Agent
   - Bridge between Producer and Consumer which receives the message and pass it out to the other party
   - (FIFO) ===> First in First out

## Models

1. P2P(Pier-to-pier) ===> Message queued in queue stack and sent to the destination over the network which takes some time because of asynchronous nature.

   - Two Parties (One ===> Producer, One ===> Consumer)

2. Publish subscribe model ===> In this model there is only a single producer and can have millions of consumers.
   - News paper subscription
   - Video subscription
   - Mobile subscrption
   - ..........etc

## Tools that help to make such things possible

- kafka
- RabbitMQ
