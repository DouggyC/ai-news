# Update AI Models Compare Page

## Task Description
Update the models compare page in `/src/app/compare/page.tsx` with the latest AI model information from frontier/FAANG companies (OpenAI, Anthropic, Google, Meta, xAI, NVIDIA, Apple, etc.) focusing on model releases, benchmarks, and specifications from the current month.

## Requirements
1. **Research**: Find the latest AI model announcements (preferably from the last 7-14 days) from:
   - OpenAI (GPT series, Codex, etc.)
   - Anthropic (Claude series)
   - Google (Gemini series)
   - Meta (Llama series)
   - xAI (Grok series)
   - NVIDIA (Nemotron series)
   - Other notable models (if significantly new/relevant)

2. **Content Focus**: Only include:
   - New model releases/updates
   - Significant benchmark improvements
   - Major capability announcements
   - Skip minor updates unless they represent meaningful progress

3. **Update Specifications**:
   - Replace the model data in `/src/app/compare/page.tsx` with current information
   - Maintain the exact same TypeScript interface and format
   - Each model entry should include: id, name, provider, releaseDate, parameters, contextLength, architecture, keyFeatures, benchmarkScores (if available), url
   - Use current month dates for all releaseDate fields (YYYY-MM-DD format)
   - Descriptions should be concise but informative

4. **Data Verification**:
   - All source links must be accessible (return HTTP 200)
   - Prefer direct links to official model cards, blog posts, or research papers
   - Verify benchmark scores from reliable sources when possible
   - Test links with curl before including

5. **Technical Requirements**:
   - Maintain existing code structure and styling
   - Do not modify any other parts of the file unnecessarily
   - Ensure TypeScript compiles without errors
   - Ensure the build succeeds (npm run build)

## Process
1. Research latest AI model announcements from target companies
2. Select the most relevant/recent models for comparison (aim for comprehensive coverage)
3. For each model:
   - Gather specifications (parameters, context window, architecture)
   - Verify release date and source URL
   - Collect benchmark scores if available and relevant
   - Craft concise description/key features
4. Replace the model data array/object in `/src/app/compare/page.tsx`
5. Run build verification: `npm run build`
6. Fix any issues that arise

## Quality Checks Before Completion
- [ ] All model data is current (from this month or very recent)
- [ ] All companies represented are relevant AI leaders
- [ ] All source URLs return HTTP 200 when tested
- [ ] All image URLs (if used) return HTTP 200 when tested
- [ ] TypeScript compiles without errors
- [ ] Build succeeds: `npm run build`
- [ ] Maintains existing formatting and code structure
- [ ] Benchmark data is properly attributed and recent

## Example Model Entry Format
```typescript
{
  id: 'gpt-5-4',
  name: 'GPT-5.4',
  provider: 'OpenAI',
  releaseDate: '2026-03-05',
  parameters: 175000000000, // 175B
  contextLength: 128000,
  architecture: 'Transformer',
  keyFeatures: ['Native computer use', 'Enhanced reasoning', '1M token context'],
  benchmarkScores: { mmlu: 89.5, humaneval: 75.2 },
  url: 'https://openai.com/research/gpt-5-4'
}
```