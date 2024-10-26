import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req) {
    return new Response(JSON.stringify({ message: 'Hello, World!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  
  export async function POST(res, req) {
    
    if (req.method === 'POST') {
      const { name, email } = await req.json();
  
      try {
        const post = await prisma.user.create({
          data: {
            name,
            email,
          },
        });
        res.status(201).json(post);
      } catch (error) {
        res.status(500).json({ error: 'Error creating post' });
      }
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  }