const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

User.hasMany(Post, {
    foreignKey: 'userId',
    onDelete: 'CASCADE',
});

User.hasMany(Comment, {
    foreignKey: 'userId',
    onDelete: 'CASCADE',
});

module.exports = User;
