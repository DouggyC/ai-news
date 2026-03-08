# AI News

Your central hub for tracking the latest in artificial intelligence - news, products, benchmarks, and model comparisons.

## Features

### 📰 AI News
Stay updated with the latest AI news, model releases, product announcements, and industry updates. Features a daily.dev-style card grid layout with:
- News cards with images and summaries
- Category badges (Model, Product, Tool, Capability, Research)
- Source attribution and publication dates
- Direct links to original articles

### 📦 AI Products
Comprehensive landscape of AI products from frontier companies organized by category:
- Chat / Assistants
- IDE / Code Editors
- CLI Tools
- API / Developer Platforms
- Automation / Orchestration
- Image Generation
- Video Generation
- Voice / TTS
- Audio / Music
- Research Tools
- Enterprise Solutions

### 📊 Benchmarks
Interactive comparison of frontier AI models across major benchmarks:
- MMLU (Massive Multitask Language Understanding)
- MMLU+ (Enhanced MMLU)
- HumanEval (Code Generation)
- LiveBench (Contamination-free evaluation)
- GPQA (Graduate-Level Science Questions)

Models grouped by open source vs closed source with radar and line charts.

### ⚖️ Compare Models
Detailed comparison table of flagship AI models including:
- Pricing (input/output per million tokens)
- Parameters and model size
- Context length
- Benchmark scores
- Capabilities (multimodal, vision, function calling, JSON, search)

## Tech Stack

- **Framework**: Next.js 16
- **UI**: React 19, Tailwind CSS 4
- **Charts**: Recharts
- **Language**: TypeScript

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # AI News homepage
│   ├── products/         # Products landscape page
│   ├── benchmarks/       # Model benchmarks page
│   └── compare/         # Model comparison page
├── components/
│   ├── Navigation.tsx    # Main navigation
│   ├── ModelCard.tsx    # Model display card
│   └── StatsCards.tsx   # Statistics cards
├── lib/
│   ├── api.ts           # API utilities
│   └── utils.ts         # Helper functions
└── types/
    └── models.ts        # TypeScript definitions
```

## Research Sources

All research sources are documented in [RESEARCH-SOURCES.md](./RESEARCH-SOURCES.md).

## License

MIT
