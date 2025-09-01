import React, {useState, useEffect} from 'react'
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ListUser = () => {
  const [user, setUser] = useState([]);
  const Navigate = useNavigate();

  const getUser = async () => {
    try {
      const response = await axios.get('http://localhost:5000/user');
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/user/${id}`);
      getUser();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className='flex justify-center items-center min-h-screen bg-grey-600 p-10'>
      <div className='w-full max-w-4xl bg-white backdrop-blur-md rounded shadow-lg p-10'>

        {/* Header */}
        <div className='flex justify-between items-center mb-4'>
          <h1 className='text-xl font-bold text-grey-700'>User List</h1>
          <Link className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' 
          to={'/add'}>+ Add User</Link>
        </div>

        {/* Table */}
        <table  className='w-full table-auto font-medium'>
          <thead className='text-grey-700'>
            <tr className='border-b-2 border-grey-700 font-bold'>
              <td className='border-r border-grey-700'>No</td>
              <td className='border-r border-grey-700'>Username</td>
              <td className='border-r border-grey-700'>Email</td>
              <td className='border-r border-grey-700'>Gender</td>
              <td className='border-r border-grey-700'>Action</td>
            </tr>
          </thead>
          <tbody className='text-grey-700'>
            {user.map((user, index) => (
              <tr key={user.id} className='border-b border-grey-700'>
                <td className='border-r border-grey-700'>{index + 1}</td>
                <td className='border-r border-grey-700'>{user.username}</td>
                <td className='border-r border-grey-700'>{user.email}</td>
                <td className='border-r border-grey-700'>{user.gender}</td>
                <td className='border-r border-grey-700'>
                  <button className='bg-blue-500 hover:bg-blue-800 text-white font-bold px-4 py-2 rounded mr-2'
                  onClick={() => Navigate(`/edit/${user.id}`)}>Edit</button>
                  <button className='bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-4 rounded ml-2'
                  onClick={() => deleteUser(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ListUser;