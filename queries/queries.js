const pool = require('../helper/database');

//get resume data
async function getResumeInfos(){
    //get experiences
    const experienceBar = await pool.query('call getExperience');
    const experience = experienceBar[0];

    //get education
    const educationBar = await pool.query('call getEducation');
    const education = educationBar[0];

    return {experience, education};
}

//add message
async function addMessage(req){
    const data = req.body;
    await pool.query(`call addMessage('${data.name}','${data.email}','${data.subject}','${data.message}')`);
}


//get messages
async function getMessages(){
    const messagesBar = await pool.query('call getMessages');
    const messages = messagesBar[0];
    
    return messages;
}

//get admins
async function getAdmins(){
    const adminsBar = await pool.query('call getAdmins');
    const admins = adminsBar[0];
    return admins;
}

module.exports = {getResumeInfos, addMessage, getMessages, getAdmins};