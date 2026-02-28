const User = require('../models/usersModel');
const getUser = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const postUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.json({ users: 'User Saved successfully' });
    } catch (err) {
    res.status(500).json({ error: err.message });
    }
}

exports.postUser = postUser;
exports.getUser = getUser;