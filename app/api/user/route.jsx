import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';


// For file upload
// import { pipeline } from 'stream';
// import { promisify } from 'util';
// import fs from 'fs';
// const pump = promisify(pipeline);

const prisma = new PrismaClient();

// Handle GET request to fetch all users
export async function GET() {
    try {
      const users = await prisma.user.findMany();
      return NextResponse.json(users);
    } catch (error) {
      return NextResponse.json({ error: 'Error fetching users' }, { status: 500 });
    }
}

export async function POST(req) {
  try {
    const formData = await req.formData()
    const name = formData.get('name');
    const email = formData.get('email');

    const post = await prisma.user.create({
      data: { name, email },
    });

    return new Response(JSON.stringify(post), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: 'Failed to create user' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
// POST with image upload (Working logic)
// export async function POST(request) {
//     //   return NextResponse.json({ data: "working fine" })
//     const formData = await request.formData()
//     const name = formData.get('name');
//     const email = formData.get('email');
//     const file = formData.get('file');

//     const filePath = `./uploads/${file.name}`;
//     await pump(file.stream(), fs.createWriteStream(filePath));
    

//     return NextResponse.json({ name, email })
// }