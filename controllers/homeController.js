const existingBlogPosts = [
    {
        id: 1,
        title: 'First Blog Post',
        content: 'Hello everyone',
        createdAt: '2023-06-22',
    },
    {
        id: 2,
        title: 'Second Post',
        content: 'this is my second post :)',
        createdAt: '2023-06-24',
    },
];

exports.getHomePage = (req, res) => {
    res.render('homepage', { blogPosts: existingBlogPosts });
};

exports.getDashboardPage = (req, res) => {
    res.render('dashboard', { userBlogPosts: existingBlogPosts });
}