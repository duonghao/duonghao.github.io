---
title: DDIA - Chapter 7 - Sharding
description: Notes
published: 2026-08-31
authors:
  - Hao Duong
---

# Sharding

Sharding is the one of the main tools for achieving horizontal scaling. If there is too much data (storage/throughput) for a single node to handle, then to continue scaling we can split the data into different **shards** and place each shard in different nodes.

Generally a record resides within only one shard and replication is applied on a per shard basis for fault tolerance.

> If a single machine can handle the data, avoid sharding. KISS.

## Use Cases

### Multitenancy

Tenants typically live in isolation. They are separate units (e.g different businesses, customers, users) with their own unique requirements.

1. Resource isolation
1. Permission isolation
1. Cell-based architecture
1. Per-tentant backup and restore
1. Regulatory compliance
1. Data residence
1. Gradual schema rollout

Each tenant can given their own shard, or even mutiple tenants can be organised under one shard.

## Implementation

The goal is for linear scaling of nodes. i.e. if you have 10 nodes, we should be able to handle 10 times more data. If sharding is unbalanced, we can have certain nodes handling more data than others. These are called hot shard or hot spot and sharding is less effective if this is the case.

To split the data, we use an algorithm to take the record as an input to output which shard it should be placed.

1. Sharding By Key Range

   Contiguous range of partition keys.

   Advantages
   - records with nearby keys can be grouped into the same shard
   - as data grows on one shard, we can split into small shards by key-range and vice versa, as data shrinks, we can merge multiple shards into one.

   Disadvantages
   - susceptible to hot shard as certain key ranges may be hit heavier than others (e.g. time range where the most recent time ranges will always be hit more often than past).

1. Sharding By Hash of Key

   Hash of partition key.
   1. Modulo the hash (e.g. hash % n-1)
   1. Fixed number of shards (e.g. 1000 shards / 10 nodes = 100 shards / node becomes 1000 shards / 11 nodes = ~91 shards / node, where the shards are moved between the nodes. n shards >> m nodes. n shards is constant.)

   Advantages
   - uniform distribution (assuming a good hash function)

   Disadvantages
   - records are essentially randomly distributed (e.g. records for time distributed data can be across different nodes)
   - must choose right number of shards from the onset, otherwise costly resharding

1. Sharding by Hash Range

   The number of shards is adaptable to the workload. Combination of key-range and hash of key sharding. Adding or removing nodes causes the range boundaries to be adjusted, and number of shards changes accordingly.

   To offset the disadvantage of range queries due to random distribution of data, we can ensure that the partition key only uses the first of two or more columns of the record key. This ensures the data will reside in one shard, from which then we can use the secondary columns to for efficient range queries.

   ```
   record_key (user_id, created_at)
   (42, 2026-01-01)
   (42, 2026-01-05)
   (42, 2026-02-10)
   (42, 2026-03-20)

   partition_key hash(user_id)

   (42, 2026-01-01) -> shard 3
   (42, 2026-01-05) -> shard 3
   (42, 2026-02-10) -> shard 3
   (42, 2026-03-20) -> shard 3
   ```

1. Consistent Hashing

   Hashes key to a specified number of numbers under the following conditions:
   1. even distribution of keys to each shard
   1. when number of shards changes, as few keys as possible are moved

   When a new node/shard is added, consistent hashing moves only a subset of keys from existing shards to the new one, rather than repartitioning all keys or simply splitting one existing shard.

For skewed workloads (e.g. celebrity posts have more reads), consistent hashing can still cause hot spots. Flexible sharding policies are required to adapt to these situations. Individual hot keys can be assigned their own shard, and own node. Can also compensate on the application side by augmenting the hot key (e.g. add extra digits to user_id to randomise the hashing).

## Request Routing

For shard databases, we have to figure out which node to send the record as it can only be handled by a node with a shard containing that key. To do so, the router must be aware of keys to shards and shards to node.

There are a few approaches to routing a record to the right node:
1. Client -> node -> node (node is aware of the right node, passing between nodes as necessary)
2. Client -> router -> node (router is aware of the right node)
3. Client -> node (client is aware of the right node)

## Secondary Indexes for Searching

### Local

Each shard maintains it's own isolated secondary indexes. As records is stored across shards, you may need to send queries to all shards and combine the results. This makes read queries particularly expensive.

### Global

Global index which covers all shards, and it itself is sharded for reliablity. You no longer have to read and combine results across shards as they can be found on one shard assuming your searching on one term, but if it's across terms you still need to perform the intersection of results. This indexing method is useful if read >> write and if the posting lists is small.

## Summary

Sharding is one tool in our toolbox to implement horizontal scaling. However, it introduces significant complexity and should only be used when necessary. With the right implementation, we can achieve linear scaling with evenly distributed loads across nodes, maximising data volume and throughput.

There are two mains approaches:
1. Key Range Sharding
2. Hash Sharding

Care should be taken to use the an appropriate sharding algorithm based on the dataset to ensure that heavy operations (e.g. resharding, rebalancing) and hot spots (nodes with disproportionately high load) are minimised.

With sharding we must also consider how we route queries to the correct shard, of which there are different techniques depending on what should be aware of the mapping between keys to shards and shards to nodes.

Secondary indexes for searching also need to be sharded as well.

There are two main approaches:
1. Local Secondary Index (high write throughput, lower read throughput)
2. Global Secondary Index (lower write throughput, higher read throughput)

The difference mainly being how the secondary indexes are distributed, with local being isolated indexes that may require searching across shards to resolve a query and global being a search on a single shard but require much more work on the write side. This shows the trade-off between reads and writes. Do more work upfront for quick reads, or vice versa.
