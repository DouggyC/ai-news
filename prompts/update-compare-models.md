# Update AI Models Compare Page

## Task Description
Update the models compare page in `/src/app/compare/page.tsx` with the latest AI model information for the 15 top frontier AI models, focusing on model releases, benchmarks, specifications, and licensing from the current month.

## Pages to Update:
1. **Compare Page** (`src/app/compare/page.tsx`) - Detailed model comparison table ONLY

## Models to Include (15 Frontier Models):
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

## Update Requirements:

### For Compare Page:
- Verify and update all model specifications:
  - Release dates (mark "Still in training" for unreleased models)
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
  - **License**: For open source models, specify the license type (e.g., Apache 2.0, MIT, Llama 3.3 Community License, etc.). For proprietary models, mark as "Proprietary".

### General Tasks:
1. Check RESEARCH-SOURCES.md for citation guidelines
2. Verify all release dates are accurate (Q2 2026 = April-June 2026)
3. Add any newly released major models
4. Update any outdated pricing or specification information
5. Add disclaimer about data being current as of update date if appropriate

## Sources to Consult:
- Official model announcement blogs (OpenAI, Anthropic, Google, Meta, etc.)
- Independent benchmarking sites (Artificial Analysis, LMCouncil, LiveBench)
- Product documentation and release notes
- Recent AI news aggregators (March-June 2026)
- Model repositories with license information (Hugging Face, GitHub, etc.)

## Verification Steps:
1. After updates, run `lsp_diagnostics` on changed files to check for TypeScript errors
2. Verify number formatting uses the `formatNumber` utility correctly
3. Check that all dates are in YYYY-MM-DD format
4. Ensure pricing values are numbers (not strings) where used in calculations
5. Confirm all model IDs are consistent
6. Verify license information is accurate and includes specific license names

## Research Requirements:
1. **Research**: Find the latest AI model information for all 15 frontier models:
   - OpenAI (GPT series, Codex, etc.)
   - Anthropic (Claude series)
   - Google (Gemini series)
   - Meta (Llama series)
   - xAI (Grok series)
   - NVIDIA (Nemotron series)
   - DeepSeek, Alibaba, ByteDance, MiniMax

2. **Content Focus**: Only include:
   - New model releases/updates
   - Significant benchmark improvements
   - Major capability announcements
   - Accurate license information for open source models

3. **Update Specifications**:
   - Replace the model data in `/src/app/compare/page.tsx` with current information
   - Maintain the exact same TypeScript interface and format
   - Each model entry should include: id, name, provider, releaseDate, parameters, contextLength, architecture, license, keyFeatures, benchmarkScores (if available), url
   - Use current month dates for all releaseDate fields (YYYY-MM-DD format)
   - Descriptions should be concise but informative

4. **License Requirements**:
   - For open source models: Include specific license (e.g., "Apache 2.0", "MIT", "Llama 3.3 Community License", "Custom Open Source License")
   - For proprietary models: Mark as "Proprietary"
   - Verify license information from official model repositories

5. **Data Verification**:
   - All source links must be accessible (return HTTP 200)
   - Prefer direct links to official model cards, blog posts, or research papers
   - Verify benchmark scores from reliable sources when possible
   - Test links with curl before including

6. **Technical Requirements**:
   - **DO NOT modify any UI or CSS** - only update content information (model data)
   - Maintain existing code structure and styling
   - Do not modify any other parts of the file unnecessarily
   - Ensure TypeScript compiles without errors
   - Ensure the build succeeds (npm run build)

## Process:
1. Research latest AI model information for all 15 frontier models
2. For each model:
   - Gather specifications (parameters, context window, architecture)
   - Verify release date and source URL
   - Collect benchmark scores if available and relevant
   - Determine and verify license (for open source: Apache 2.0, MIT, etc.)
   - Craft concise description/key features
3. Replace the model data array/object in `/src/app/compare/page.tsx`
4. Run build verification: `npm run build`
5. Fix any issues that arise

## Quality Checks Before Completion:
- [ ] Exactly 15 frontier models included
- [ ] All model data is current (from this month or very recent)
- [ ] All source URLs return HTTP 200 when tested
- [ ] All image URLs (if used) return HTTP 200 when tested
- [ ] TypeScript compiles without errors
- [ ] Build succeeds: `npm run build`
- [ ] Maintains existing formatting and code structure
- [ ] Benchmark data is properly attributed and recent
- [ ] License information is accurate and includes specific license names

## Example Model Entry Format:
```typescript
{
  id: 'gpt-5-4',
  name: 'GPT-5.4',
  provider: 'OpenAI',
  releaseDate: '2026-03-05',
  parameters: 175000000000, // 175B
  contextLength: 128000,
  architecture: 'Transformer',
  license: 'Proprietary',
  keyFeatures: ['Native computer use', 'Enhanced reasoning', '1M token context'],
  benchmarkScores: { mmlu: 89.5, humaneval: 75.2 },
  url: 'https://openai.com/research/gpt-5-4'
}
```

## Example Open Source Model Entry:
```typescript
{
  id: 'llama-4-scout',
  name: 'Llama 4 Scout',
  provider: 'Meta',
  releaseDate: '2026-03-15',
  parameters: 49000000000, // 49B
  contextLength: 200000,
  architecture: 'Mixture of Experts',
  license: 'Llama 3.3 Community License',
  keyFeatures: ['Open weights', 'Long context', 'Efficient inference'],
  benchmarkScores: { mmlu: 85.2, humaneval: 72.1 },
  url: 'https://ai.meta.com/research/llama/'
}
```
