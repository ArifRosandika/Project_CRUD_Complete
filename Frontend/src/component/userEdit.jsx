// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate, useParams } from "react-router-dom";

// const UserEdit = () => {
//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [gender, setGender] = useState('Male');
//     const Navigate = useNavigate();
//     const { id } = useParams();

//     useEffect(() => {
//         getUsersId();
//     }, []);

//     const handleUserEdit = async (e) => {
//         e.preventDefault();
//         try {
//         const response = await axios.patch(`http://localhost:5000/user/${id}`, {
//             username: username,
//             email: email,
//             gender: gender
//         });
//         Navigate('/');
//         console.log(response.data);
//     }   catch (error) {
//         console.log(error.message);
//     }
//     }

//     const getUsersId = async () => {
//         try {
//             const response = await axios.get(`http://localhost:5000/user/${id}`);
//             setUsername(response.data.username);
//             setEmail(response.data.email);
//             setGender(response.data.gender);
//         } catch (error) {
//             console.log(error.message);
//         }
//     };

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UserEdit = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const Navigate = useNavigate();
    const { id } = useParams();
    
    
    const handleUserEdit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.patch(`http://localhost:5000/user/${id}`, {
                username: username,
                email: email,
                gender: gender
            });
            Navigate('/');
            console.log(response.data);
        } catch (error) {
            console.error(error.message);
        }
    };

    const getUsersId = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/user/${id}`);
            setUsername(response.data.username);
            setEmail(response.data.email);
            setGender(response.data.gender);
        } catch (error) {
            console.error(error.message);
        };
    };

    useEffect(() => {
        getUsersId();
    }, []);


    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="bg-white backdrop-blur-md rounded shadow-lg p-6">
                <form className="flex justify-center items-center flex-col"
                 onSubmit={handleUserEdit}>
                    <div className="mb-2">
                        <label className="text-grey-500">Name</label>
                        <div className="">
                            <input className="border rounded bg-black/10" type="text" 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Edit Username" />
                        </div>
                    </div>
                    <div className="mb-2">
                        <label className="text-grey-500">Email</label>
                        <div>
                            <input className="border rounded bg-black/10" type="text" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Edit Email" />
                        </div>
                    </div>
                    <div className="mb-2">
                        <label className="text-grey-500">Gender</label>
                        <div>
                            <div>
                                <select className="border rounded bg-black/10" 
                                value={gender} 
                                onChange={(e) => setGender(e.target.value)}>
                                    <option value={""}>-- Select Gender --</option>
                                    <option value={"male"}>Male</option>
                                    <option value={"female"}>Female</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" type="button" onClick={() => Navigate('/')}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserEdit;