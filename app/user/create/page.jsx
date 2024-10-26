"use client"

import { useState, useEffect } from 'react';

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // const [file, setFile] = useState(null);

  useEffect(() => {
    // Fetch all users when the component is mounted
    async function fetchUsers() {
      const response = await fetch('/api/user');
      const data = await response.json();
      setUsers(data);
    }
    fetchUsers();
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

    const response = await fetch('/api/user', {
      method: 'POST',
      // headers: { 'Content-Type': 'multipart/form-data' },
      // body: JSON.stringify({ name, email, file }),
      body: formData,
    });

    const newUser = await response.json();
    setUsers((prevUsers) => [...prevUsers, newUser]);
    setName('');
    setEmail('');
  };

  return (
    <div className='container mt-2'>
      <h3>Create User</h3>
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
            {/* Input for file upoad */}
            {/* <Input
              type="file"
              placeholder="Email"
              value={file}
              onChange={(e) => setFile(e.target.value)}
              required
              id="fileInput"
            /> */}
        </div>
        <Button type="submit">Create User</Button>
      </form>
    </div>
  );
}