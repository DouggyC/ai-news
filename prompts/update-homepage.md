# Update AI News Homepage Cards

## Task Description
Update the homepage news cards in `/src/app/page.tsx` with the latest AI news from frontier/FAANG companies (OpenAI, Anthropic, Google, Meta, xAI, NVIDIA, Apple) focusing on model releases and AI product updates from the current month.

## ⚠️ MANDATORY PRE-UPDATE RESEARCH
Before updating ANY content, run research to discover the current landscape:

### Research Queries (execute all):
```
OpenAI AI models [current month] 2026 site:openai.com OR site:techcrunch.com
Anthropic AI models [current month] 2026 site:anthropic.com OR site:techcrunch.com  
Google AI models [current month] 2026 site:deepmind.google OR site:techcrunch.com
Meta AI models [current month] 2026 site:ai.meta.com OR site:techcrunch.com
xAI Grok models [current month] 2026 site:x.ai OR site:techcrunch.com
NVIDIA AI models [current month] 2026 site:nvidia.com OR site:techcrunch.com
Apple AI [current month] 2026 site:apple.com OR site:techcrunch.com
DeepSeek AI models [current month] 2026 site:deepseek.com OR site:techcrunch.com
Alibaba Qwen [current month] 2026 site:qwenlm.ai OR site:techcrunch.com
MiniMax AI models [current month] 2026 site:minimaxi.com OR site:techcrunch.com
```

### What to Discover:
1. **New model names** released since last update
2. **Discontinued/replaced models** - any models with newer versions
3. **Major version jumps** - e.g., V3 → V4
4. **Proprietary ↔ Open Source changes** - new open models, newly closed models

**Do NOT assume any model name or status from the previous version is still current.**
**Update content to match reality as discovered through research.**

## Requirements
1. **Research**: Find the latest AI news (preferably from the last 7-14 days) from:
   - OpenAI (GPT models, Codex, Sora, etc.)
   - Anthropic (Claude models, Claude Code, etc.)
   - Google (Gemini models, Workspace AI, etc.)
   - Meta (Llama models, Muse Spark, AI products, etc.)
   - xAI (Grok models)
   - NVIDIA (AI chips, models, software)
   - Apple (AI hardware/features if significantly AI-focused)
   - DeepSeek, Alibaba, ByteDance, Mistral, MiniMax

2. **Content Focus**: Only include:
   - New model releases/updates
   - Significant AI product launches
   - Major AI feature announcements
   - Skip partnerships, acquisitions, or non-product news unless they're major AI launches

3. **Update Specifications**:
   - Edit `/src/data/newsCards.json` with the new cards array (24 items)
   - Maintain the exact same JSON structure (id, title, summary, source, sourceUrl, imageUrl, category, publishedAt)
   - The page.tsx imports from `../data/newsCards.json` automatically
   - Categories should be: 'model' for AI models, 'product' for AI products/features, 'tool' for AI tools
   - Use current month dates for all publishedAt fields (YYYY-MM-DD format)
   - Summaries should be 1-2 sentences describing the key announcement

4. **Image Handling**:
   - Use company-specific images from `data/data/images.json` instead of generic Unsplash images
   - Verify image URLs are accessible (return HTTP 200)

5. **Alternative Sources Strategy**:
   - Never leave broken URLs - always find working alternatives
   - All sourceUrl links must be accessible (return HTTP 200)

6. **Technical Requirements**:
   - **DO NOT modify any UI or CSS** - only update content information (news cards data)
   - Ensure TypeScript compiles without errors
   - Ensure the build succeeds (npm run build)

## Process
1. Execute pre-update research queries above
2. Research latest AI news from target companies
3. Select 24 most relevant/recent model/product announcements
4. For each card:
   - Craft appropriate title and summary
   - Verify source URL accessibility
   - Find/verify working image URL
   - Assign correct category
   - Set current month date
5. Replace the newsCards array in `/src/data/newsCards.json`
6. Run build verification: `npm run build`

## Quality Checks Before Completion
- [ ] Exactly 24 cards in the newsCards array
- [ ] All companies represented are frontier/FAANG AI leaders
- [ ] All content is from current month (no outdated news)
- [ ] All image URLs return HTTP 200 when tested
- [ ] All source URLs return HTTP 200 when tested
- [ ] TypeScript compiles without errors
- [ ] Build succeeds: `npm run build`

## Last Updated Date
Update the "Last updated:" date at the top of the file to today's date (Month DD, YYYY format).