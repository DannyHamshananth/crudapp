"use client"
import { Button } from '@/components/ui/button';
import { PencilIcon, Trash } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Create = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch all users when the component is mounted
    async function fetchUsers() {
      const response = await fetch('/api/user');
      const data = await response.json();
      setUsers(data);
    }
    fetchUsers();
  }, []);
  
  const handleDelete = async (id) => {
    const response = await fetch(`/api/user/${id}`, {method: 'DELETE'});
    if(response.status === 204)
    setUsers((prevUsers) => prevUsers.filter(user => user.id !== id));
  }

  return (
    <div className='container mt-2'>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">#</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Email</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Edit</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Delete</th>
            </tr>
          </thead>
          <tbody>
            { users.length > 0
              ? (users.map((user, index) => (
                  <tr className="bg-gray-50" key={index}>
                    <td className="px-6 py-4 border-b">{user.id}</td>
                    <td className="px-6 py-4 border-b">{user.name}</td>
                    <td className="px-6 py-4 border-b">{user.email}</td>
                    <td className="px-6 py-4 text-center border-b">
                      <Link href={`/user/edit/${user.id}`}>
                        <Button className="bg-green-900 hover:bg-green-200" >
                          <PencilIcon/>
                        </Button>
                      </Link>
                    </td>
                    <td className="px-6 py-4 text-center border-b">
                      <Button className="bg-red-700 hover:bg-pink-300" onClick={(id)=>{handleDelete(user.id)}}>
                        <Trash/>
                      </Button>
                    </td>
                  </tr>
                )))
              : (
                <tr className="bg-gray-50 text-center">
                  <td colspan="5" className="px-6 py-4 border-b text-center">No users has been created yet!</td>
                </tr>
              )
            }
          </tbody>
        </table>
    </div>
    </div>
  )
}

export default Create