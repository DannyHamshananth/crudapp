import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// export default async function handler(req, { params }) {
//   const { id } = params;

//   try {
//     const post = await prisma.user.findUnique({
//       where: { id: Number(id) },
//     });

//     if (!post) {
//       return new Response(JSON.stringify({ message: 'User not found' }), {
//         status: 404,
//         headers: { 'Content-Type': 'application/json' },
//       });
//     }

//     return new Response(JSON.stringify(post), {
//       status: 200,
//       headers: { 'Content-Type': 'application/json' },
//     });
//   } catch (error) {
//     return new Response(JSON.stringify({ message: 'Error fetching user' }), {
//       status: 500,
//       headers: { 'Content-Type': 'application/json' },
//     });
//   }
// }

// export default async function PUT(req, { params }) {
//     const { id } = params;
//     const formData = await req.formData();

//     const name = formData.get('name');
    
//     const email = formData.get('email');

//     try {
//       const updatedUser = await prisma.user.update({
//         where: { id: Number(id) },
//         data: { name, email },
//       });
  
//       return new Response(JSON.stringify(updatedUser), {
//         status: 200,
//         headers: { 'Content-Type': 'application/json' },
//       });
//     } catch (error) {
//       return new Response(JSON.stringify({ message: 'Error updating user' }), {
//         status: 500,
//         headers: { 'Content-Type': 'application/json' },
//       });
//     }
// }

// export default async function DELETE(req, { params }) {
//     const { id } = params;
  
//     try {
//       await prisma.user.delete({
//         where: { id: Number(id) },
//       });
  
//       return new Response(null, { status: 204 });
//     } catch (error) {
//       return new Response(JSON.stringify({ message: 'Error deleting user' }), {
//         status: 500,
//         headers: { 'Content-Type': 'application/json' },
//       });
//     }
// }

export default async function handler(req, res) {
  if (method === 'GET') {
    return new Response(JSON.stringify({ message: 'User not found' }))
  }
}