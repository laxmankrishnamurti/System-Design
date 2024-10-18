# URL Shortener System Design

1. Features

- Functional Requirements
- Non-Functional Requirements

2. Estimates (Memory, CPU Requirements)
3. Design goal (CAP)
4. HLD
5. Scaling

## 1. Features

- Functional Requirements

  - Shorten
  - Redirection
  - Expiry

- Non-Functional Requirements

  - Highly available
  - Low latency
  - URL's should not be predictable

## 2. Estimate the system capacity

Application nature ===> Read heavy VS Write heavy ===> Read heavy ===> Read : Write ===> (100:1)

- Let in a month

  - New URLs ===> 1 Million; Expiry ===> 10 years
  - URLs Redirection ===> 100 Millions

- Query per second

  - 100,000,000 / 30*24*3600 ====> 50 (appx.)
  - Query per day ===> 50 \* 86400 ===> 5,000,000 (appx)

- Storage

  - 1,000,000, _ 12 _ 10 ===> 120,000,000 million/decades

  - Storage required ===> 120,000,000 \* 500(bytes) ===> 60,000,000,000 bytes ===> 60 GB (appx.)

- Caching (only 25%)
  - Total urls ===> 1.25 million \* 500 bytes ===> 625000000 bytes ===> 1 GB (appx)
  - Total required cache memory ===> 1 GB

## 3. Design Goal

- Read Intensive
- High available
- Low latency
- Security (not everybody can shorten url)

## 4. High level design

- API

  - Authentication
  - url shortener api
  - delete url
  - signup
  - signin
  - redirection api

- Database

  - MongoDB

    - URL

      - original_url
      - shorten_url
      - user_id
      - expiry_date
      - created_at

    - USER
      - user_id
      - name
      - email
      - api_key
      - created_at

- Algorithm

  - Long to short without any collision

  1. key-value pairs(Not scalable)
  2. md5 generator(Chance to collision)
  3.

  - Expiry = 10 years
  - Characters = 62 (upper, lower, decimal)
    = 62^n > 1,000,000 _ 10 _ 12
    = 62^n > 120,000,000
    = n ===> log62(120,000,000) ===> 4.5 ===> ceil ===> 5(appx.) ===> let n = 7 (For avoiding collision) ===> 3.5 Trillion
  - Base 62 of the request counter which is associated with the url
  - Short url
  - Saved into the database
  - Save the url into cache
  - Consistent hash partitioning(Scaling Database) and read/write replicas
  - LRU cache eviction

## 5. Make your own design.
