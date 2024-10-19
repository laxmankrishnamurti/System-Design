# Dropbox System Design

## 1. Functional Requirements

- Upload
- Download
- Share
- Search
- File versions

## 2. Non-functional Requirements

- Scalable
- Highly available
- Low latency
- Optimize data transfer by minimizing bandwidth
- ACID
  - Atomicity
  - Consistency
  - Isolation
  - Durability

## 3. Estimating the system capacity

- Users ===> 1 Billion
  - Total space ===> 1 Billion (users) \* 20 GB (average user storage) ===> 20 Billion GB

## 4. High level design

Ex :- DropBox, Google Drive, OneDrive

- Storage layer ===> File storage
- Metadata storage layer ===> File's metadata storage
- Synchronizer ===> Responsible for synchronize the file across all devices

## 5. Client

- Upload the file
- Download the file
- Detect any changes
- Break the file into smaller changes thereby optimizing the file transfer (Now only file changes has to be transferred instead of while file)

1. Chunker ===> Calculate hash of each chunk and upload to x and get an UNIQUE URL.
2. Watcher ===> Notifies chunker about all the changes that user has changed in the file & it also notifies the index value about the place where changes happened.
3. InternalDB ===> Stores hashes, URL & metadata about the file.
4. Indexer ===> Takes HASH & URL of chunks from chunker and save to InternalDB.

<code>Watcher ===> Chunker ===> Indexer ===> InternalDB</code>

## 6. Storage Layer

- Highly Distributed
  - HDFS, GFS
- Add Caching

## 7. Metadata storage layer

DATABASE ===> MYSQL (For Consistency)

- Permissions
- Devices list
- Info of chunks
- Workspace folders
- Versions
- Hashes

## 8. Synchronizer

Synchronize to other clients by information about the changes and update the file totally without updating it into chunks.

- Changes made by one client is queued into _messaging queue_ asynchronously.
- Synchronizer listen all the changes and put all the changes into another message queue that is listened by other synchronizer and they catch the message and replicate those changes among all devices.

Messeging Queue ===> kafka
