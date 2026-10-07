---
title: Another Hands
description: Real-time multiplayer blackjack
published: 2026-10-03
authors:
  - Hao Duong
---

Blackjack. We all know it. Been there, played that, casually or professionally, or, ahem, as a professional amateur. A game that has been reinvented so many times that one would be insane to make another one. I would agree, but it's precisely that point that I think makes for a great project. One of the challenges I've had in many of my other side projects is that unclear and arbitrary goals lead to unmanageable feature creep and, well... side project hell. Here we have a game, a defined set of rules, and one challenge. At least that's what I thought...

This is going to be a multi-part series about my adventures recreating blackjack. The game itself is only one part of the story. What I actually want out of this is to learn things I haven't had the chance to learn properly. So before diving in, here's what I'm hoping to learn, and the objectives I'll build towards to get there.

### Learning Goals
These are the overarching goals of this project. It's mainly about expanding my skillset outside my comfort zone on the frontend, and learning about all these abstractions I've encountered in my work but have never really explored in depth.

1. Expand my skills in backend development
   1. Learn and apply distributed systems concepts (reliability, scalability, maintainability)
1. Expand my skills in cloud and infrastructure
   1. Learn a cloud provider (AWS)
1. Expand my skills in AI-assisted development
   1. Learn how to leverage Claude as a code assistant, code reviewer and a teacher

### Project Objectives
 The overall aim is a real-time multiplayer blackjack game that holds up as more people play it.

1. Build a correct and complete blackjack game
   1. Implement the core rules as a self-contained game engine, independent of any network or UI concerns
   1. Make the game logic deterministic and testable so every round can be verified and replayed
1. Support real-time multiplayer
   1. Let multiple players join a table and play the same round together, with every player seeing state changes as they happen
   1. Keep the server as the single source of truth so clients can't cheat or drift out of sync
   1. Handle the messy parts of real connections: disconnects, reconnects and players leaving mid-round
1. Design for scale
   1. Run many tables concurrently, with each table isolated from the others
   1. Keep the application servers stateless where possible so capacity can be added by adding instances
   1. Identify the bottlenecks as load grows and measure them with load tests, rather than guessing
1. Be reliable and maintainable
   1. Recover gracefully from failures without losing the state of a game in progress
   1. Add observability (logging, metrics, tracing) so problems can be diagnosed in production
   1. Automate building, testing and deploying to the cloud

I'll tackle these in stages, narrowing the scope in each stage and building on the one before, moving step by step towards a fully fledged multiplayer blackjack game that maybe, one day, we can all play together.
