const express = require('express');
const router = express.Router();
const { Post, User, Comment } = require('../models');

router.get('/', async (req, res) => {
    try {
        const posts = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
                {
                    model: Comment,
                    include: [User],
                },
            ],
        });

        res.render('homepage', { posts });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

router.get('/post/:id', async (req, res) => {
    try {
        const postId = req.params.id;

        const post = await Post.findByPk(postId, {
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
                {
                    model: Comment,
                    include: [User],
                },
            ],
        });

        if (!post) {
            res.status(404).json({ message: 'Post not found.' });
            return;
        }

        res.render('post', { post });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

router.post('/post', async (req, res) => {
    try {
        const { title, content, userId } = req.body;

        const post = await Post.create({ title, content, userId });

        res.status(201).json({ message: 'Post Created', post });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
 });

 router.put('/post/:id', async (req, res) => {
    try {
        const postId = req.params.id;
        const { title, content } = req.body;

        const post = await Post.findByPk(postId);

        if (!post) {
            res.status(404).json({ message: 'Post not found' });
            return;
        }

        post.title = title;
        post.content = content;

        await post.save();

        res.json({ message: 'Post Updated', post });
    } catch (err) {
        console.error(err) 
            res.status(500).json({ message: 'Server Error' });
        } 
 });

 router.delete('/post/:id', async (req, res) => {
    try {
        const postId = req.params.id;

        const post = await Post.findByPk(postId);

        if (!post) {
            res.status(404).json({ message: 'post not found' });
            return;
        }

        await post.destroy();

        res.json({ message: 'Post Deleted' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
 });

 module.exports = routes;