#!/usr/bin/env node
'use strict';
const fs = require('fs');
const path = require('path');

const factsPath = path.join(__dirname, '..', 'data', 'ai-facts.json');
const { facts } = JSON.parse(fs.readFileSync(factsPath, 'utf8'));
const fact = facts[Math.floor(Math.random() * facts.length)];

const WIDTH = 62;
const label = `FACT #${fact.id}: ${fact.category.toUpperCase().replace(/_/g, ' ')}`;
const cta   = `Learn more at joindrafted.com/students`;

function wrap(str, max) {
  const words = str.split(' ');
  const lines = [];
  let line = '';
  for (const w of words) {
    if (line.length > 0 && (line + w).length > max) {
      lines.push(line.trimEnd());
      line = '';
    }
    line += w + ' ';
  }
  if (line.trim()) lines.push(line.trimEnd());
  return lines;
}

function pad(str, len) {
  return str + ' '.repeat(Math.max(0, len - str.length));
}

const inner = WIDTH - 4;
const textLines = wrap(fact.text, inner);

const top    = `╔${'═'.repeat(WIDTH - 2)}╗`;
const catRow = `║ ${pad(label, WIDTH - 4)} ║`;
const div    = `╠${'═'.repeat(WIDTH - 2)}╣`;
const empty  = `║${' '.repeat(WIDTH - 2)}║`;
const rows   = textLines.map(l => `║ ${pad(l, WIDTH - 4)} ║`);
const ctaRow = `║ ${pad(cta, WIDTH - 4)} ║`;
const bot    = `╚${'═'.repeat(WIDTH - 2)}╝`;

const lines = [top, catRow, div, empty, ...rows, empty, ctaRow, bot];

const RESET  = '\x1b[0m';
const CYAN   = '\x1b[96m';
const YELLOW = '\x1b[93m';
const DIM    = '\x1b[2m';

function colorLine(l, i) {
  if (i === 0 || i === lines.length - 1) return CYAN + l + RESET;
  if (i === 1) return YELLOW + l + RESET;
  if (i === 2) return CYAN + l + RESET;
  if (l.includes('joindrafted')) return DIM + l + RESET;
  return l;
}

let i = 0;
function printNext() {
  if (i >= lines.length) return;
  process.stderr.write(colorLine(lines[i], i) + '\n');
  i++;
  setTimeout(printNext, 40);
}

printNext();
