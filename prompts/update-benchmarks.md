# Update Benchmarks Page

## Task Description
Update the benchmarks page in `/src/app/benchmarks/page.tsx` with the latest benchmark information for the 15 top frontier AI models. Ensure all data reflects current and accurate benchmark scores from independent evaluation sources.

## Pages to Update:
1. **Benchmarks Page** (`src/app/benchmarks/page.tsx`) - Model benchmark visualizations ONLY

## Update Requirements:

### Benchmark Information:
- Collect and verify benchmark scores for the following 15 frontier models:
  1. GPT-5.4 (OpenAI)
  2. GPT-5.4 Thinking (OpenAI)
  3. Claude Opus 4.6 (Anthropic)
  4. Claude Sonnet 4.6 (Anthropic)
  5. Gemini 3.1 Pro (Google)
  6. Gemini 2.5 Pro (Google)
  7. Llama 4 Behemoth (Meta)
  8. Llama 4 Scout (Meta)
  9. Grok 4 Beta (xAI)
  10. Grok 4.20 Beta (xAI)
  11. Nemotron 3 Super (NVIDIA)
  12. DeepSeek V4 (DeepSeek)
  13. Qwen3.5 (Alibaba)
  14. Doubao 2.0 (ByteDance)
  15. MiniMax M2.5 (MiniMax)

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
   - Update the model data in `/src/app/benchmarks/page.tsx` with current information
   - Maintain the exact same TypeScript interface and format
   - Each model entry should include: id, name, provider, benchmarkScores (MMLU, MMLU+, HumanEval, LiveBench, GPQA)
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
4. Update the benchmark data in `/src/app/benchmarks/page.tsx`
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
