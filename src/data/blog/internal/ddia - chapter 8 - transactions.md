---
title: DDIA - Chapter 8 - Transactions
description: Notes
published: 2026-09-03
authors:
  - Hao Duong
---

# Transactions

A transaction is a unit of work, a grouping of reads and writes that are executed as one operation resulting in a successful *commit* or failure with *rollback*.

## ACID

The safety guarantees offered by a transaction.

1. Atomicity
  Transactions are commited as a whole; if it fails partway through, it is aborted in it's entirety and rolled back. This not only provides a guarantee that upon success the entire set of changes is commited but also guarantees that upon failure there are no changes.
2. Consistency
  Transactions enforce invariants, assuming those invariants are declared as constraints within the system, whether that be at the database or application level.
3. Isolation
  Transactions operation independently of one another, even during concurrently executing transactions. When transactions are commited, the result is the same as if they were running in serial.
4. Durability
  Transactions upon commit are guaranteed to have been written and not forgotten, even when experiencing a fault.

## Isolation Levels

Transaction isolation make it appear as if concurrent transactions were not happening concurrently and they would have the same effect if they ran serially. In practice, this is not generally the case due to associated performance issues, and therefore systems use weak isolation levels which prevent *some* concurrency issues but not all.

1. Read Committed
  - no dirty reads
  - no dirty writes
2. Snapshot Isolation and Repeatable Read
  Every transaction views a snapshot of the database, not it's real-time state where there may be an ongoing number of other transactions.
