# Update AI News Homepage Cards

## Task Description
Update the homepage news cards in `/src/app/page.tsx` with the latest AI news from frontier/FAANG companies (OpenAI, Anthropic, Google, Meta, xAI, NVIDIA, Apple) focusing on model releases and AI product updates from the current month.

## Requirements
1. **Research**: Find the latest AI news (preferably from the last 7-14 days) from:
   - OpenAI (GPT models, Codex, Sora, etc.)
   - Anthropic (Claude models, Claude Code, etc.)
   - Google (Gemini models, Workspace AI, etc.)
   - Meta (Llama models, AI products, etc.)
   - xAI (Grok models)
   - NVIDIA (AI chips, models, software)
   - Apple (AI hardware/features if significantly AI-focused)

2. **Content Focus**: Only include:
   - New model releases/updates
   - Significant AI product launches
   - Major AI feature announcements
   - Skip partnerships, acquisitions, or non-product news unless they're major AI launches

3. **Update Specifications**:
   - Replace the `newsCards` array in `/src/app/page.tsx` with exactly 12 cards
   - Maintain the exact same TypeScript interface and format
   - Each card must have: id, title, summary, source, sourceUrl, imageUrl, category, publishedAt
   - Categories should be: 'model' for AI models, 'product' for AI products/features, 'tool' for AI tools
   - Use current month dates for all publishedAt fields (YYYY-MM-DD format)
   - Summaries should be 1-2 sentences describing the key announcement

4. **Image Handling**:
   - Use Unsplash URLs that are known to work (test with curl before including)
   - Prioritize images that visually represent the topic (chips for hardware, brains/networks for AI models, etc.)
   - If an image URL returns 404, replace it with a working alternative
   - Preferred pattern: `https://images.unsplash.com/photo-[ID]?w=400&h=250&fit=crop`

5. **Link Verification**:
   - All sourceUrl links must be accessible (return HTTP 200)
   - Prefer direct links to official announcements/blog posts
   - Test links with curl before including

6. **Technical Requirements**:
   - Maintain existing code structure and styling
   - Do not modify any other parts of the file
   - Ensure TypeScript compiles without errors
   - Ensure the build succeeds (npm run build)

## Process
1. Research latest AI news from target companies
2. Select 12 most relevant/recent model/product announcements
3. For each card:
   - Craft appropriate title and summary
   - Verify source URL accessibility
   - Find/verify working image URL
   - Assign correct category
   - Set current month date
4. Replace the newsCards array in `/src/app/page.tsx`
5. Run build verification: `npm run build`
6. Fix any issues that arise

## Example Card Format
```typescript
{
  id: '1',
  title: 'Descriptive Title of the Announcement',
  summary: 'Concise 1-2 sentence summary of what was announced and its significance.',
  source: 'Company Name',
  sourceUrl: 'https://official-announcement-link.com',
  imageUrl: 'https://images.unsplash.com/photo-WORKING-ID?w=400&h=250&fit=crop',
  category: 'model', // or 'product' or 'tool'
  publishedAt: '2026-03-15' // use current month
}
```

## Quality Checks Before Completion
- [ ] Exactly 12 cards in the newsCards array
- [ ] All companies represented are frontier/FAANG AI leaders
- [ ] All content is from current month (no outdated news)
- [ ] All image URLs return HTTP 200 when tested
- [ ] All source URLs return HTTP 200 when tested
- [ ] TypeScript compiles without errors
- [ ] Build succeeds: `npm run build`
- [ ] Maintains existing formatting and code structure