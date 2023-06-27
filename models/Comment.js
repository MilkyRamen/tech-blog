const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Comment = sequelize.define('comment', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
});

Comment.belongsTo(User, {
    foreignKey: 'userId',
});

Comment.belongsTo(Post, {
    foreignKey: 'postId',
});

module.exports = Comment;