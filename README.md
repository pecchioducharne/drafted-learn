# drafted-learn

A Claude Code plugin that shows a rotating AI/ML educational fact every time Claude is thinking — branded by [Drafted Labs](https://joindrafted.com/students).

Built for students entering the AI workforce. Every tool call is a micro-lesson.

```
╔══════════════════════════════════════════════════════════════╗
║ FACT #045: AGENTS                                            ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║ Claude Code is itself an AI agent — it reads your           ║
║ codebase, plans edits, writes files, runs bash commands,    ║
║ and iterates until your task is complete.                    ║
║                                                              ║
║ Learn more at joindrafted.com/students                       ║
╚══════════════════════════════════════════════════════════════╝
```

## Install

```bash
claude /plugin marketplace add drafted-labs/drafted-learn
claude /plugin install drafted-learn@drafted-learn
```

Done. Every tool call from that point on shows a fact.

## What you get

**94 facts** across 8 categories:

| Category | Topics |
|---|---|
| Foundations | Tokens, context windows, temperature, overfitting |
| Neural Networks | Backprop, gradient descent, CNN, RNN, dropout |
| Transformers & LLMs | Attention, BERT, GPT, RLHF, KV-cache, MoE |
| AI Agents | Agentic loops, tool use, ReAct, MCP, benchmarks |
| AI History | Turing (1950) through o1 (2024) |
| Training Data | Annotation, RLHF, IAA, synthetic data, scaling |
| Practical ML Engineering | Loss, RAG, embeddings, precision/recall |
| Ethics & Safety | Hallucination, alignment, prompt injection, red-teaming |

## How it works

The plugin registers a `PreToolUse` hook that fires before every Claude tool call. It picks a random fact from `data/ai-facts.json`, renders a colored box to `stderr`, and exits. The `async: true` flag means Claude never waits for it — zero latency impact.

```
PreToolUse hook → show-fact.js → stderr output → Claude continues
```

## Add more facts

Edit `data/ai-facts.json` and follow the schema:

```json
{
  "id": "095",
  "category": "agents",
  "difficulty": "intermediate",
  "text": "Your fact here.",
  "source": "Your Source",
  "tags": ["tag1", "tag2"]
}
```

## License

MIT — Drafted Labs
