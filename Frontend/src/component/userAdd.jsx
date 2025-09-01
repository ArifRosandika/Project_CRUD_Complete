import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserAdd = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const Navigate = useNavigate();

    const handleUserAdd = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:5000/user', { username: username, email: email, gender: gender });
            Navigate('/');
            console.log(username, email, gender);
        } catch (error) {
            console.log(error.message);
        };
    };


    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className=" bg-white rounded shadow-lg p-5">
                <form className="flex justify-center items-center flex-col" onSubmit={handleUserAdd}>
                    <div className="mb-2">
                        <label className="text-grey-500">Name</label>
                        <div>
                            <input className="border rounded bg-black/10" type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Input Username" />
                        </div>
                    </div>
                    <div className="mb-2">
                        <label className="text-grey-500">Email</label>
                        <div>
                            <input className="border rounded bg-black/10" type="text" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Input Email" />
                        </div>
                    </div>
                    <div className="mb-2">
                        <label className="text-grey-500">Gender</label>
                        <div>
                            <div>
                                <select className="border rounded bg-black/10" 
                                value={gender} 
                                onChange={(e) => setGender(e.target.value)}>
                                    <option value="">-- Select Gender --</option>
                                    <option value={"male"}>Male</option>
                                    <option value={"female"}>Female</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" type="button" onClick={() => Navigate('/')}>Back</button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        type="reset" onClick={() => { setUsername(''); setEmail(''); setGender(''); }}>Reset</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserAdd;