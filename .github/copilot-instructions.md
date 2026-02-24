# Soc Ops — Workspace Instructions

**Project**: Social Bingo game for in-person mixers. Find people who match the questions and get 5 in a row!

## Development Checklist
- [ ] Run `npm install` to install dependencies
- [ ] Run `npm run lint` to verify code quality
- [ ] Run `npm run test` to pass all tests
- [ ] Run `npm run build` to create production build
- [ ] Run `npm run dev` to start local dev server at `http://localhost:5174`

## Quick Start
```bash
npm install         # Install dependencies
npm run dev         # Start dev server
npm run build       # Production build
npm run lint        # Check code quality
npm run test        # Run tests
```

## Project Structure

### Core
- `src/App.tsx` — Main application component
- `src/main.tsx` — Entry point
- `index.html` — HTML template
- `src/types/index.ts` — TypeScript type definitions
- `src/data/questions.ts` — Bingo quiz questions

### Components
- `src/components/BingoBoard.tsx` — 5x5 bingo game board
- `src/components/BingoSquare.tsx` — Individual square component
- `src/components/GameScreen.tsx` — Active game interface
- `src/components/StartScreen.tsx` — Welcome/setup screen
- `src/components/BingoModal.tsx` — Modal dialogs

### Utilities & Hooks
- `src/utils/bingoLogic.ts` — Core game logic (generateBoard, toggleSquare, checkBingo, getWinningSquareIds)
- `src/utils/bingoLogic.test.ts` — 21 unit tests for game logic
- `src/hooks/useBingoGame.ts` — Custom hook for game state management

### Configuration
- `vite.config.ts` — Vite build configuration
- `tsconfig.json` — TypeScript configuration
- `eslint.config.js` — ESLint rules
- `tailwind.config.js` — Tailwind CSS v4 configuration
- `.vscode/settings.json` — VS Code workspace settings

## Stack
- **React 19** — UI framework
- **TypeScript 5.9** — Type safety
- **Vite 7** — Build tool & dev server
- **Tailwind CSS 4** — Styling (see [tailwind-4.instructions.md](.github/instructions/tailwind-4.instructions.md))
- **Vitest 4** — Unit testing
- **ESLint 9** — Code linting

## Key Workflows

### Game Logic
The `bingoLogic.ts` module handles:
- `generateBoard()` — Creates 5x5 board with 24 unique questions + 1 free center space
- `toggleSquare(board, squareId)` — Mark/unmark squares
- `checkBingo(board)` — Detect winning patterns (rows, columns, diagonals)
- `getWinningSquareIds(board, winningLine)` — Highlight winning squares

### Testing
- All game logic has 100% test coverage (21 tests in `bingoLogic.test.ts`)
- Use Vitest: `npm run test` runs tests with live output
- Add new tests before implementing features (TDD)

### Styling
- Use Tailwind CSS v4 utility classes
- CSS variables for theme consistency
- Dark mode support via `dark:` prefix
- See [tailwind-4.instructions.md](.github/instructions/tailwind-4.instructions.md) for latest v4 features

### Frontend Design
- See [frontend-design.instructions.md](.github/instructions/frontend-design.instructions.md)
- Avoid generic AI aesthetics; create distinctive, delightful interfaces
- Use creative typography, color schemes, and animations
- Match implementation complexity to design vision

## Commit & Deploy
- Commits to `main` automatically deploy via GitHub Actions → GitHub Pages
- GitHub Pages URL: `https://{github-username}.github.io/agent-social-bingo`
- Enable in repo Settings > Pages > Deploy from a branch

## Learning Objectives
1. **Onboard AI to your codebase** with context engineering
2. **Understand agentic primitives** for AI-first engineering workflows
3. **Scale exploration** with AI agents (design variations, quiz generation, etc.)
4. **Create engaging social experiences** with bingo gameplay

## Useful Commands
- `npm run dev` — Dev server (auto-reload on file changes)
- `npm run build` — Production build (outputs to `dist/`)
- `npm run lint` — Check code quality
- `npm run test` — Run unit tests
- `npm run test -- --watch` — Watch mode for tests

## Directory Guidelines

### Add new prompts
`.github/prompts/` — Custom AI agent workflows (e.g., `/setup`, `/cloud-explore`)

### Add new agents
`.github/agents/` — Specialized agent configurations (e.g., `quiz-master.agent.md`, `pixel-jam.agent.md`)

### Add instructions
`.github/instructions/` — Context for AI interactions (e.g., design guidelines, framework docs)

### Tests
`src/**/*.test.ts` — Colocate tests with source files

## Extension Recommendations
- Tailwind CSS IntelliSense
- ESLint
- Prettier (optional)
- React DevTools

## Common Issues

**Port 5173 in use?**
Vite automatically tries the next port (5174, 5175, etc.)

**Tests failing?**
Run `npm run lint --fix` to auto-fix issues, then `npm run test`

**Build errors?**
Run `npm run build` to see detailed TypeScript errors

**Git config**
Local setup: `git config user.email "sorin.burtoiu@endava.com"` and `git config user.name "Sorin Burtoiu"`

---

**See Also**: [Lab Guide](./.lab/GUIDE.md) for hands-on workshop tasks and learning paths.
