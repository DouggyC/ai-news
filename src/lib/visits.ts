import { promises as fs } from 'fs';
import path from 'path';

export async function incrementVisits() {
  const filePath = path.join(process.cwd(), 'data', 'visits.json');
  
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const { visits } = JSON.parse(data);
    const newVisits = visits + 1;
    await fs.writeFile(filePath, JSON.stringify({ visits: newVisits }, null, 2));
    return newVisits;
  } catch (error) {
    console.error('Error incrementing visits:', error);
    return null;
  }
}
