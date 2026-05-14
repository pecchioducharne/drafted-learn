# drafted-learn

A Claude Code plugin that shows a rotating AI/ML educational fact on every prompt — branded by [Drafted Labs](https://joindrafted.com/students).

Built for students entering the AI workforce. Every Claude session is a micro-lesson.

```
  ╔══════════════════════════════════════════════════════════════╗
  ║ FACT #045: AGENTS                                            ║
  ╠══════════════════════════════════════════════════════════════╣
  ║                                                              ║
  ║ Claude Code is itself an AI agent — it reads your           ║
  ║ codebase, plans edits, writes files, runs bash commands,    ║
  ║ and iterates until your task is complete.                   ║
  ║                                                              ║
  ║ Learn more at joindrafted.com/students                       ║
  ╚══════════════════════════════════════════════════════════════╝
```

- Box adapts to your terminal width automatically
- CTA link is clickable in iTerm2 and other OSC 8 terminals
- Fires on every prompt submission via `UserPromptSubmit` hook
- Zero latency — runs async, writes directly to `/dev/tty`

## Install

```bash
claude /plugin marketplace add pecchioducharne/drafted-learn
claude /plugin install drafted-learn@drafted-learn
```

Two commands. Done.

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

Registers a `UserPromptSubmit` hook — fires every time you hit enter. Picks a random fact from `data/ai-facts.json`, renders a full-width colored box directly to the terminal. `${CLAUDE_PLUGIN_ROOT}` is resolved by Claude Code at install time so the path always works.

## Add more facts

Edit `data/ai-facts.json`:

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
