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
2. Compliant
3. Isolation
4. Durability