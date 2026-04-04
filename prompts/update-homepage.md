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
   - Replace the `newsCards` array in `/src/app/page.tsx` with exactly 24 cards
   - Maintain the exact same TypeScript interface and format
   - Each card must have: id, title, summary, source, sourceUrl, imageUrl, category, publishedAt
   - Categories should be: 'model' for AI models, 'product' for AI products/features, 'tool' for AI tools
   - Use current month dates for all publishedAt fields (YYYY-MM-DD format)
   - Summaries should be 1-2 sentences describing the key announcement

4. **Image Handling**:
   - Use company-specific images from `data/data/images.json` instead of generic Unsplash images
   - Match the correct image to the correct company based on the article:
     - NVIDIA → Nemotron 3 Super image
     - Anthropic → Claude Opus 4.6 image
     - xAI → Grok 4.20 Beta image
     - Meta → Llama 4 Scout/Maverick image
     - OpenAI → GPT-5.4 image
     - ByteDance → Doubao 2.0 image
     - Alibaba → Qwen3.5 image
     - DeepSeek → DeepSeek V4 image
     - Mistral → Ministral 3 image
     - MiniMax → M2.5 image
   - For companies not in images.json (Google, Microsoft, Oracle, Adobe, Amazon), use appropriate fallback images or generic tech images
   - Verify image URLs are accessible (return HTTP 200)

5. **Link Verification**:
   - All sourceUrl links must be accessible (return HTTP 200)
   - Prefer direct links to official announcements/blog posts
   - Test links with curl before including

6. **Technical Requirements**:
   - **DO NOT modify any UI or CSS** - only update content information (news cards data)
   - Maintain existing code structure and styling
   - Do not modify any other parts of the file
   - Ensure TypeScript compiles without errors
   - Ensure the build succeeds (npm run build)

## Process
1. Research latest AI news from target companies
2. Select 24 most relevant/recent model/product announcements
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
- [ ] Exactly 24 cards in the newsCards array
- [ ] All companies represented are frontier/FAANG AI leaders
- [ ] All content is from current month (no outdated news)
- [ ] All image URLs return HTTP 200 when tested
- [ ] All source URLs return HTTP 200 when tested
- [ ] TypeScript compiles without errors
- [ ] Build succeeds: `npm run build`
- [ ] Maintains existing formatting and code structure