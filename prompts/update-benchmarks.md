# Update Benchmarks Page

## Task Description
Update the benchmarks page in `/src/app/benchmarks/page.tsx` with the latest benchmark information for the 15 top frontier AI models. Ensure all data reflects current and accurate benchmark scores from independent evaluation sources.

## ⚠️ MANDATORY PRE-UPDATE RESEARCH
Before updating ANY content, run research to discover the current model landscape:

### Research Queries (execute all):
```
OpenAI GPT-5 benchmark scores 2026 site:openai.com OR site:artificialanalysis.ai
Anthropic Claude benchmark scores 2026 site:anthropic.com OR site:lmarena.ai
Google Gemini benchmark scores 2026 site:deepmind.google OR site:artificialanalysis.ai
Meta Llama benchmark scores 2026 site:ai.meta.com OR site:lmarena.ai
xAI Grok benchmark scores 2026 site:x.ai OR site:lmarena.ai
NVIDIA Nemotron benchmark scores 2026 site:nvidia.com OR site:artificialanalysis.ai
DeepSeek V4 benchmark scores 2026 site:deepseek.com OR site:artificialanalysis.ai
Alibaba Qwen benchmark scores 2026 site:qwenlm.ai OR site:lmarena.ai
MiniMax M2 benchmark scores 2026 site:minimaxi.com OR site:artificialanalysis.ai
```

### What to Discover:
1. **New benchmark scores** released since last update
2. **Model updates** - any models with new versions
3. **Score improvements** - better performance on benchmarks

**Do NOT assume any benchmark scores from the previous version are still current.**

## Pages to Update:
1. **Benchmarks Page** (`src/app/benchmarks/page.tsx`) - Model benchmark visualizations ONLY

## Update Requirements:

### Benchmark Information:
- Collect and verify benchmark scores for the following 15 frontier models:
  1. GPT-5.5 (OpenAI)
  2. Claude Opus 4.7 (Anthropic)
  3. Claude Sonnet 4.6 (Anthropic)
  4. Gemini 3.1 Pro (Google)
  5. Gemini 2.5 Pro (Google)
  6. Llama 4 Behemoth (Meta)
  7. Llama 4 Scout (Meta)
  8. Grok 4.20 Beta (xAI)
  9. Nemotron 3 Super (NVIDIA)
  10. DeepSeek V4 (DeepSeek)
  11. Qwen3.5 (Alibaba)
  12. Doubao 2.0 (ByteDance)
  13. MiniMax M2.7 (MiniMax)
  14. Kimi 2.6 (Moonshot)
  15. Qwen 3.6 Max (Alibaba)

### Benchmark Types to Include:
- MMLU (Massive Multitask Language Understanding)
- MMLU+ (Enhanced MMLU)
- HumanEval (Code Generation)
- LiveBench (Contamination-free evaluation)
- GPQA (Graduate-Level Science Questions)

### General Tasks:
1. Check RESEARCH-SOURCES.md for citation guidelines
2. Verify benchmark scores against latest independent sources
3. Ensure all 15 models are represented with current data
4. Add disclaimer about data being current as of update date if appropriate

## Sources to Consult:
- Independent benchmarking sites (Artificial Analysis, LMCouncil, LiveBench)
- Official model announcement blogs (OpenAI, Anthropic, Google, Meta, etc.)
- Research papers with benchmark results
- Recent AI news aggregators (March-June 2026)

## Verification Steps:
1. After updates, run `lsp_diagnostics` on changed files to check for TypeScript errors
2. Verify number formatting uses the `formatNumber` utility correctly
3. Ensure all benchmark scores are numbers (not strings)
4. Confirm visualization data matches the benchmarkModels array

## Research Requirements:
1. **Research**: Find the latest benchmark scores for all 15 models from:
   - Independent benchmarking sites
   - Official model releases with benchmark claims
   - Research papers and technical reports

2. **Content Focus**:
   - Verifiable benchmark scores from trusted sources
   - Prioritize independent evaluations over self-reported scores
   - Note the source and date of each benchmark score

3. **Update Specifications**:
   - Update the model data in `/src/data/benchmarkModels.json` with current information
   - Maintain the exact same JSON structure (id, name, provider, openSource, mmlu, humaneval, livebench, mmluPlus, gpqa)
   - The page.tsx imports from `../data/benchmarkModels.json` automatically
   - Use null for any unavailable benchmark scores

4. **Data Verification**:
   - All source links must be accessible (return HTTP 200)
   - Prefer links to official benchmark reports or independent evaluation sites

5. **Technical Requirements**:
   - **DO NOT modify any UI or CSS** - only update content information (benchmark data)
   - Maintain existing code structure and styling
   - Do not modify any other parts of the file unnecessarily
   - Ensure TypeScript compiles without errors
   - Ensure the build succeeds (npm run build)

## Process:
1. Research latest benchmark scores for all 15 frontier models
2. Verify scores from independent sources where possible
3. For each model:
   - Gather benchmark scores (MMLU, MMLU+, HumanEval, LiveBench, GPQA)
   - Verify source URLs for benchmark data
4. Update the benchmark data in `/src/data/benchmarkModels.json`
5. Run build verification: `npm run build`
6. Fix any issues that arise

## Quality Checks Before Completion:
- [ ] All 15 frontier models have benchmark data
- [ ] Benchmark scores are from verifiable sources
- [ ] All source URLs return HTTP 200 when tested
- [ ] TypeScript compiles without errors
- [ ] Build succeeds: `npm run build`
- [ ] Maintains existing formatting and code structure
- [ ] Visualization data properly reflects the benchmark scores

## Last Updated Date
Update ALL "Last updated:" dates in the file to today's date (Month DD, YYYY format).