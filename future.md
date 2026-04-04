Root Cause: The visit counter writes to a local file (data/visits.json) that only exists in your development environment.
When deployed to Vercel:
1. The serverless function runs in an ephemeral filesystem
2. Any file writes are discarded when the function finishes
3. The data/visits.json file doesn't exist on Vercel's servers anyway
Solution: You need a database or external storage to persist the counter. Options:
- Vercel KV (Redis) - Free tier available
- Vercel Postgres - Free tier available  
- Supabase - Free tier
- PlanetScale (MySQL) - Free tier