const Project = require('../models/projectsModel');
const getProject = async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const postProject = async (req, res) => {
    try {
        const newProject = new Project(req.body);
        await newProject.save();
        res.json(newProject);
    } catch (err) {
        res.status(500).json({ error: err.users });
    }
}

exports.postProject = postProject;
exports.getProject = getProject;