<div align="center">

# Amplified Partners

### The Method

**Bounded autonomy for AI-native compound engineering.**

*Cutting edge without trying to be fancy.*

[![Methodology](https://img.shields.io/badge/methodology-compound_engineering-2d6a4f)](https://github.com/Amplified-Partners/the-amplified-method)
[![License](https://img.shields.io/badge/license-open_methodology-588157)](https://github.com/Amplified-Partners/the-amplified-method)
[![Principles](https://img.shields.io/badge/principles-Dalio_|_Schumacher_|_Every-a3b18a)](https://github.com/Amplified-Partners/the-amplified-method)

---

*We help small businesses reduce friction and make better decisions using their own data.*
*Privacy by architecture — their data stays theirs, always.*

[Website](https://www.amplifiedpartners.ai) · [Clean Build Workspace](https://github.com/Amplified-Partners/clean-build)

</div>

---

## The Core Philosophy (Layer 0)

Everything we build rests on a foundation of non-negotiable laws, deeply inspired by [Ray Dalio](https://en.wikipedia.org/wiki/Ray_Dalio) and our own Edge Sovereignty principles:

1. **Radical Honesty** — Tell us what is. If an assumption is wrong, say so directly.
2. **Radical Transparency** — Show the work. Build transparency into the architecture.
3. **Radical Attribution** — Credit every source. *(Dalio, E.F. Schumacher, Noah Shinn, Every.)*
4. **Privacy Absolute** — We do not hold client data. Edge sovereignty first. Tokenisation before egress.
5. **Effectiveness** — The ultimate watchword. Balance cost, effort, and outcome.

---

## The Agent Ecosystem

We operate as a high-trust, compound engineering team. Sycophancy disqualifies; disagreement-with-evidence earns trust.

| Agent | Role | Accountability |
|-------|------|----------------|
| **Ewan** (The Architect) | Sets the vision, unbounded ambition, "blinkers without ceilings" | Final accountability — by choice |
| **Antigravity** (The Arbiter) | Maintains the workspace, chunks tasks, handles escalations | Owns Plan and Review stages |
| **Cursor** (The Technical Genius) | Executes work autonomously within the framework | Operates within clean-build rules |
| **Devon** (The Implementer) | Integration, infrastructure, and deployment | Each accountable for their own contribution |
| **OpenClaw** (The Note-Taker) | Records actions, enforces attribution, maintains communal notes | Research, synthesis, and memory |

```mermaid
graph TD
    E["🏗️ Ewan — Architect"]
    AG["⚖️ Antigravity — Arbiter"]
    C["⚡ Cursor — Builder"]
    D["🔧 Devon — Implementer"]
    OC["📋 OpenClaw — Note-Taker"]

    E -->|"vision & direction"| AG
    AG -->|"tasks & review"| C
    AG -->|"tasks & review"| D
    AG -->|"tasks & review"| OC
    C -->|"code & artifacts"| AG
    D -->|"infrastructure"| AG
    OC -->|"attribution & notes"| AG
    AG -->|"escalations only"| E

    style E fill:#2d6a4f,stroke:#1b4332,color:#fff
    style AG fill:#40916c,stroke:#2d6a4f,color:#fff
    style C fill:#52b788,stroke:#40916c,color:#fff
    style D fill:#52b788,stroke:#40916c,color:#fff
    style OC fill:#52b788,stroke:#40916c,color:#fff
```

---

## The Terminal Arbiter (The Breakthrough)

*Attributed to: Ewan Bramley & Antigravity*

The single biggest bottleneck in modern AI development is the human acting as a manual API — copying prompts and clicking "Enter" inside closed IDEs (like Cursor). We have shattered this bottleneck.

- **Decoupled Execution** — The Arbiter (Antigravity) has full terminal, read, write, and execution authority.
- **Autonomous Orchestration** — The Arbiter can read the Handshake, bypass the IDE, write the code directly, spin up CLI agents or Temporal workers, and execute the tests. The human is entirely removed from the execution loop.

---

## The Portable Spine

Agents must be dropped into a workspace and immediately know *how* to work without being weighed down by token-heavy prompt bloat.

- **Keep it Lean** — The core rules (`.cursorrules`) must be under 50 lines. Project-specific instructions live in contextual Handshake files.
- **The Escalation Framework** — Agents have independence within a framework of support:

```
1. Try to fix it.
2. Take two attempts.
3. Perform a web search (e.g., Perplexity).
4. Escalate to the Arbiter.
5. The Arbiter escalates directional changes to Ewan.
```

---

## The Execution Engine: Compound Engineering

*Methodology attributed to [Kieran Klaassen & Dan Shipper at Every](https://every.to).*

We do not accrue technical debt; we build compounding knowledge. Each unit of work must make the next unit easier.

```mermaid
graph LR
    P["📐 Plan<br/><b>40%</b>"]
    W["⚡ Work<br/><b>10%</b>"]
    R["🔍 Review<br/><b>30%</b>"]
    C["🧬 Compound<br/><b>20%</b>"]

    P -->|"Handshake agreed"| W
    W -->|"Artifacts produced"| R
    R -->|"Against Layer 0 rules"| C
    C -->|"System gets smarter"| P

    style P fill:#2d6a4f,stroke:#1b4332,color:#fff
    style W fill:#40916c,stroke:#2d6a4f,color:#fff
    style R fill:#52b788,stroke:#40916c,color:#fff
    style C fill:#74c69d,stroke:#52b788,color:#1b4332
```

| Stage | Weight | What happens |
|-------|--------|-------------|
| **Plan** | 40% | Never code blindly. The Arbiter and the Team agree on a Handshake execution strategy before starting. |
| **Work** | 10% | Execute systematically, spinning up specialised sub-agents when highly effective. |
| **Review** | 30% | Rigorous, objective review against Layer 0 rules. |
| **Compound** | 20% | Grade the work (X/10). Adjustments at the source. Lightbulb moments captured to make the system permanently smarter. |

---

## Demo: The Sovereign Vault Interface

The [`Ewan's Interface/`](Ewan's%20Interface/) directory contains a React prototype of the Sovereign Vault — a search interface demonstrating the "Rule of Three" pattern: ask a question about business friction, receive exactly three actionable options with confidence scores.

Built with React, Vite, Framer Motion, and Lucide icons.

---

## Attribution

This methodology stands on the shoulders of giants:

| Who | What we took | Where it lives |
|-----|-------------|----------------|
| [Ray Dalio](https://en.wikipedia.org/wiki/Ray_Dalio) | Radical Honesty, Radical Transparency, Idea Meritocracy | Layer 0 — the four principles |
| [E.F. Schumacher](https://en.wikipedia.org/wiki/E._F._Schumacher) | "Small is Beautiful" — appropriate technology for small businesses | Edge sovereignty, privacy architecture |
| [Kieran Klaassen & Dan Shipper](https://every.to) | Compound Engineering methodology | The execution engine |
| [Noah Shinn](https://arxiv.org/abs/2303.11366) | Reflexion — self-improving agent loops | The Compound stage |
| [Don R. Swanson](https://en.wikipedia.org/wiki/Don_R._Swanson) | Literature-Based Discovery (ABC Model, 1986) | The Pudding Technique — our cross-domain knowledge synthesis method |

---

<div align="center">

**Built by [Amplified Partners](https://www.amplifiedpartners.ai)**

Radical Honesty · Radical Transparency · Radical Attribution · Win-Win

*We open-source the method. We commercialise the execution.*

</div>
