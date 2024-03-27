import path from 'path'; 
import { promises as fs } from 'fs';

export async function GET(request: Request) {
  const filePath = path.join(process.cwd(), 'public', 'api.json');
  const data = await fs.readFile(filePath, 'utf8');

  return new Response(data, {
    status: 200,
  })
}