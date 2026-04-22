# AI News

![Next.js](https://img.shields.io/badge/Next.js-16.2.4-black)
![React](https://img.shields.io/badge/React-19.2.5-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0.3-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.2.1-38bdf8)
![License](https://img.shields.io/badge/License-MIT-green)

Your central hub for tracking the latest in artificial intelligence — model releases, product announcements, benchmark performance, and industry analysis from the top AI companies.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Configuration](#configuration)
- [Research Sources](#research-sources)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

AI News aggregates and presents the most important developments in artificial intelligence in an easily digestible format. Track frontier model releases, compare benchmark scores, explore the AI product landscape, and stay informed about the rapidly evolving AI ecosystem — all in one place.

The site covers 15+ foundation model companies including OpenAI, Anthropic, Google, Meta, xAI, NVIDIA, DeepSeek, Alibaba, Mistral, and MiniMax.

---

## Features

### 📰 AI News Feed
Real-time updates on AI model releases, product launches, and major announcements. Features:
- Daily.dev-style card grid layout
- Category badges (Model, Product, Tool, Capability, Research)
- Source attribution with company logos
- Publication dates and direct links to source articles
- Filtered by top 15 foundation model companies

### 📊 Model Benchmarks
Interactive comparison of frontier AI models across 5 major benchmarks:
- **MMLU** (Massive Multitask Language Understanding)
- **MMLU+** (Enhanced MMLU)
- **HumanEval** (Code Generation)
- **LiveBench** (Contamination-free evaluation)
- **GPQA** (Graduate-Level Science Questions)

Models are grouped by open source vs. closed source with interactive radar and line charts.

### ⚖️ Model Comparison
Detailed side-by-side comparison of flagship AI models:
- Pricing (input/output per million tokens)
- Parameters and model size
- Context window length
- Benchmark scores across all major evaluations
- Capabilities (multimodal, vision, function calling, JSON, search)

### 📦 AI Products Landscape
Comprehensive overview of AI products organized by category:
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

---

## Screenshots

> **[Screenshots coming soon]** The project is optimized for both light and dark modes with a clean, modern design.

### Demo
```
Open http://localhost:3000 in your browser to see the live demo.
```

---

## Installation

### Prerequisites

- **Node.js** 18+ (recommended: 20.x LTS)
- **npm** or **yarn**

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/ai-news.git
cd ai-news

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev

# 4. Open in browser
# Navigate to http://localhost:3000
```

### Production Build

```bash
# Create an optimized production build
npm run build

# Start the production server
npm start
```

---

## Usage

### Development

Run the development server with hot-reloading:

```bash
npm run dev
```

### Production

```bash
# Build for production
npm run build

# Start production server
npm start
```

### Data Updates

The site fetches model data from `public/data/models-data.json`. To update model information:

1. Edit `public/data/models-data.json` with new model specs
2. Update benchmark scores in `src/app/benchmarks/page.tsx`
3. Add news cards in `src/app/page.tsx`
4. Rebuild with `npm run build`

---

## Project Structure

```
ai-news/
├── public/
│   └── data/
│       └── models-data.json     # Model specifications and benchmark data
├── src/
│   └── app/
│       ├── page.tsx             # AI News homepage
│       ├── products/
│       │   └── page.tsx        # AI Products landscape
│       ├── benchmarks/
│       │   └── page.tsx       # Model benchmarks with charts
│       └── compare/
│           └── page.tsx        # Model comparison table
├── data/
│   └── data/
│       └── images.json         # Company image URLs
├── prompts/
│   ├── update-benchmarks.md    # Benchmark update workflow
│   ├── update-compare.md       # Model comparison update workflow
│   ├── update-homepage.md      # News cards update workflow
│   └── update-products.md      # Products page update workflow
├── RESEARCH-SOURCES.md         # Citation sources and research links
├── README.md
└── package.json
```

### Key Files

| File | Purpose |
|------|---------|
| `src/app/page.tsx` | News feed with cards from top AI companies |
| `src/app/benchmarks/page.tsx` | Interactive benchmark charts |
| `src/app/compare/page.tsx` | Model comparison table |
| `src/app/products/page.tsx` | Products landscape by category |
| `public/data/models-data.json` | Central model data store |
| `RESEARCH-SOURCES.md` | All citation sources |

---

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 16 (App Router) |
| UI Library | React 19 |
| Styling | Tailwind CSS 4 |
| Charts | Recharts |
| Language | TypeScript 6 |
| Package Manager | npm |

---

## Configuration

### Environment Variables

No environment variables are required for local development. The project uses static JSON data files.

### Model Data

Model data is stored in `public/data/models-data.json`. Each model entry includes:

```json
{
  "id": "gpt-5.4-pro",
  "name": "GPT-5.4 Pro",
  "provider": "OpenAI",
  "openSource": false,
  "license": "Proprietary",
  "releaseDate": "2026-03-05",
  "parameters": 2000000000000,
  "contextLength": 1048576,
  "inputPrice": 30.0,
  "outputPrice": 180.0,
  "mmlu": 91.8,
  "mmluPlus": 93.0,
  "humaneval": 94.1,
  "liveBench": 79.0,
  "multimodal": true,
  "vision": true,
  "functionCalling": true,
  "json": true,
  "search": true
}
```

---

## Research Sources

All research sources are documented in [RESEARCH-SOURCES.md](./RESEARCH-SOURCES.md). Sources include:

- Official company announcements and blog posts
- Technical documentation (OpenAI API, Anthropic, Google Cloud)
- AI news aggregators (TechCrunch, VentureBeat, The Verge)
- Benchmark references (LiveBench, LLM Arena, SWE-Bench)
- Industry analysis publications

---

## Contributing

Contributions are welcome! Here's how to help:

### Adding New Models

1. Add the model to `public/data/models-data.json`
2. Add benchmark scores to `src/app/benchmarks/page.tsx`
3. Create a news card in `src/app/page.tsx` if it's a significant release
4. Update the products page if the company has new products

### Adding News Cards

1. Edit `src/app/page.tsx`
2. Add a new card to the `newsCards` array
3. Ensure the source URL is accessible (HTTP 200)
4. Use company images from `data/data/images.json` when available

### Style Guidelines

- Maintain existing code structure and styling
- Do not modify UI or CSS — only content updates
- Ensure TypeScript compiles without errors: `npm run build`
- All source URLs must be accessible (return HTTP 200)

---

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

## Acknowledgements

- **Next.js** — The React framework powering the application
- **Tailwind CSS** — Utility-first CSS framework
- **Recharts** — Composable charting library for React
- **All research sources** listed in [RESEARCH-SOURCES.md](./RESEARCH-SOURCES.md)
- **Foundation AI companies** for continued innovation in the field
