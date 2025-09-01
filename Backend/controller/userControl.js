// import Users from "../models/userModel.js";

// export const getUsers = async (req, res) => {
//     try {
//         const user = await Users.findAll();
//         res.status(200).json(user);
//     } catch (error) {
//         console.log(error.message);
//     };
// };

// export const getUsersId = async (req, res) => {
//     try {
//         const user = await Users.findOne({
//             where: {id: req.params.id}
//         });
//         res.status(200).json(user);
//     } catch (error) {
//         console.log(error.message);
//     };
// };

// export const userCreate = async (req, res) => {
//     try {
//         await Users.create(req.body);
//         res.status(200).json({msg: "User Created"});
//     } catch (error) {
//         console.log(error.message);
//     };
// };

// export const userUpdate = async (req, res) => {
//     try {
//         await Users.update(req.body, {
//             where: {id: req.params.id}
//         });
//         res.status(200).json({msg: "User Updated"});
//     } catch (error) {
//         console.log(error.message);
//     };
// };

// export const userDelete = async (req, res) => {
//     try {
//         await Users.destroy ({
//             where: {id: req.params.id}
//         });
//         res.status(200).json({msg: "User Deleted"});
//     } catch (error) {
//         console.log(error.message);
//         res.status(500).json({msg: error.message});
//     };
// };

import User from "../models/userModel.js";

export const getUser = async(req, res) => {
    try {
        const user = await User.findAll();
        res.status(200).json(user);
    } catch (error) {
        console.log(error.message);
    };
};

export const getUserId = async(req, res) => {
    try {
        const user  = await User.findOne({
            where: {id: req.params.id}
        });
        res.status(200).json(user);
    } catch (error) {
        console.log(error.message);
    };
};

export const userCreate = async(req, res) => {
    try {
        await User.create(req.body);
        res.status(200).json({msg: "User Created"});
    } catch (error) {
        console.log(error.message);
    };
};

export const userUpdate = async(req, res) => {
    try {
        await User.update(req.body, {
            where: {id: req.params.id}
        })
        res.status(200).json({msg: "User Updated"});
    } catch (error) {
        console.error(error.message);
    };
};

export const userDelete = async(req, res) => {
    try {
        await User.destroy({
            where: {id: req.params.id}
        });
        res.status(200).json({msg: "User Deleted"});
    } catch (error) {
        console.error(error.message);
    };
};