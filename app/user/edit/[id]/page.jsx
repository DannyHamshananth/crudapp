"use client"

import { useState, useEffect } from 'react';

import { useRouter } from 'next/navigation';

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const page = ({ params }) => {
  const router = useRouter()
  const [id, setId] = useState(params.id);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Fetch a user when the component is mounted
    async function fetchUser() {
      const response = await fetch( `/api/user/${id}` );
      const data = await response.json();
      setName(data.name);
      setEmail(data.email)
    }
    fetchUser();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name)
    formData.append('email', email)

    //If form consists a file
    // const fileInput = document.getElementById('fileInput');
    // const file = fileInput.files[0];  // Get the first file from the input
    // formData.append('file', file)

    const response = await fetch(`/api/user/${id}`, {
      method: 'PUT',
      // Applicable to file upload use cases
      // headers: { 'Content-Type': 'multipart/form-data' },
      // body: JSON.stringify({ name, email, file }),
      body: formData,
    });

    const newUser = await response.json();
    setName('');
    setEmail('');
    router.push('/user')
  };

  return (
    <div className='container mt-2'>
      <h3>Edit User</h3>
      <form onSubmit={handleSubmit}>
        <div className='space-y-6 my-4'>
          <div className="grid max-w-sm items-center gap-1.5">
            <Label>Name</Label>
            <Input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="grid max-w-sm items-center gap-1.5">
          <Label>Email</Label>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <Button type="submit">Save User</Button>
        </div>
      </form>
    </div>
  )
}

export default page