import db from "../config/database.js";
import { Sequelize } from "sequelize";

const { DataTypes } = Sequelize;

const User = db.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    gender: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});

export default User;