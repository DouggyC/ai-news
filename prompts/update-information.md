You are tasked with updating AI model and product information across three key pages in an AI tracking application: compare, products, and benchmarks. Your goal is to ensure all data reflects the latest Q2 2026 releases and specifications.

## Pages to Update:
1. **Compare Page** (`src/app/compare/page.tsx`) - Detailed model comparison table
2. **Products Page** (`src/app/products/page.tsx`) - AI product landscape by category  
3. **Benchmarks Page** (`src/app/benchmarks/page.tsx`) - Model benchmark visualizations

## Update Requirements:

### For Compare Page:
- Verify and update all model specifications:
  - Release dates (mark "Still in training" for unreleased models like Llama 4 Behemoth)
  - Context lengths (use verified values: Gemini 2.5/3.1 Pro = 1,048,576 tokens)
  - Pricing (per 1M tokens): 
    - GPT-5.4 Thinking: $2.50 input / $15.00 output
    - GPT-5.4 Pro: $30.00 input / $180.00 output
    - Gemini 3.1 Pro: $2.00 input / $12.00 output (via Gemini API)
    - Gemini 2.5 Pro: $0.25 input / $0.50 output (Flash/Lite variants)
    - Claude Opus 4.6: $15.00 input / $75.00 output
  - Benchmark scores (MMLU, HumanEval, etc.) - verify against latest sources
  - Model parameters and sizes
  - Capabilities (multimodal, vision, function calling, etc.)

### For Products Page:
- Update product descriptions to indicate current model power sources:
  - Chat/Assistant: Specify which model powers each (Gemini 3.1 Pro, GPT-5.4, Claude Opus 4.6, etc.)
  - IDE/Code Editor: Update descriptions with current capabilities
  - Add new Q2 2026 AI developer tools:
    - JetBrains Junie CLI (LLM-agnostic coding agent in beta)
    - Courier CLI (notification infrastructure for AI agents)
    - Any other notable IDE/CLI releases
- Update company colors array to include new companies
- Verify all product URLs and descriptions

### For Benchmarks Page:
- Verify benchmark scores against latest independent evaluations
- Ensure model list includes all major frontier models
- Check that visualization data matches the benchmarkModels array
- Confirm benchmark definitions are current

### General Tasks:
1. Check RESEARCH-SOURCES.md for citation guidelines
2. Verify all release dates are accurate (Q2 2026 = April-June 2026)
3. Add any newly released major models (check for GPT-5.5, Gemini 3.2, Claude 4.7, Llama 4.1, etc.)
4. Update any outdated pricing or specification information
5. Ensure consistency across all three pages (same model names, specs, etc.)
6. Add disclaimer about data being current as of update date if appropriate

## Sources to Consult:
- Official model announcement blogs (OpenAI, Anthropic, Google, Meta, etc.)
- Independent benchmarking sites (Artificial Analysis, LMCouncil, LiveBench)
- Product documentation and release notes
- Recent AI news aggregators (March-June 2026)

## Verification Steps:
1. After updates, run `lsp_diagnostics` on changed files to check for TypeScript errors
2. Verify number formatting uses the `formatNumber` utility correctly
3. Check that all dates are in YYYY-MM-DD format
4. Ensure pricing values are numbers (not strings) where used in calculations
5. Confirm all model IDs match across pages for consistency

Begin by examining the current state of each page, then systematically apply updates based on your research.