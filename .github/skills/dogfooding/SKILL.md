---
name: dogfooding
description: 'Critically dogfood an app and score product fun. Use when asked to test like a power user, assess engagement, find UX friction, and provide high-impact improvements with evidence from behavior and code.'
argument-hint: 'target area or scenario to dogfood'
user-invocable: true
---

# Critical Dogfooding

## When to Use
- The user asks for a realistic product pass, not just code correctness.
- You need fun, engagement, and usability feedback grounded in execution.
- You need a repeatable workflow for acceptance checks plus product critique.

## Outcome
Produce a concise report with:
1. Runtime confidence and test confidence
2. Fun score and replay score
3. Ranked findings with evidence
4. Fastest high-impact fixes
5. Optional next implementation batch

## Procedure
1. Confirm runnable state
- Verify the app starts and the primary URL responds.
- If not running, execute setup commands and re-check.
- Record startup friction as a product finding.

2. Validate quality gates
- Run lint, tests, and build when feasible.
- If a gate fails, continue dogfooding but mark confidence as reduced.

3. Run scenario-based dogfood pass
- First-time experience: onboarding clarity, first action latency, motivation.
- Core loop: interaction feel, progression, feedback quality, dead ends.
- Win or completion loop: emotional payoff, next objective clarity, replay pull.
- Mobile and desktop sanity: readability, tap targets, layout stability.

4. Evaluate fun explicitly
Score each axis from 1 to 10:
- Immediate hook
- Momentum and pacing
- Social energy or emotional spikes
- Replay value
- Delight and memorability

5. Convert observations into actionable findings
For each finding include:
- Severity: high, medium, low
- Why it harms engagement
- Evidence from behavior and relevant files
- A concrete fix direction

6. Prioritize impact
- Recommend 3 to 5 changes that most increase fun per effort.
- Label quick wins versus deeper redesign items.

7. Close with a clear recommendation
- State current readiness for a live session.
- Suggest a next implementation batch and a re-dogfood plan.

## Decision Points
- If app cannot run: switch to setup-first mode, then resume dogfooding.
- If tests fail: keep UX feedback flowing, but call out technical risk explicitly.
- If product is stable but boring: focus recommendations on game loop escalation.
- If product is exciting but brittle: prioritize reliability before feature expansion.

## Quality Criteria
- Feedback is grounded in observed behavior, not guesswork.
- Findings are ordered by user impact.
- At least one metric-like score is provided for fun and replay.
- Recommendations are specific enough to implement in the next sprint.

## Example Prompts
- Dogfood this app like a critical host preparing a live event.
- Run a fun-focused dogfood pass and propose the top 5 changes.
- Evaluate onboarding, core loop, and replay value, then prioritize fixes.
