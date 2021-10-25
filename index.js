const app = require('express')();

const aboutRoute = require("./routes/about");
const resumeRoute = require("./routes/resume");
const contactRoute = require("./routes/contact");
const extraRoute = require("./routes/extra");
const loginRoute = require("./routes/login");
const messagesRoute = require("./routes/messages");


app.use("/", aboutRoute);
app.use("/resume", resumeRoute);
app.use("/contact", contactRoute);
app.use("/extra", extraRoute);
app.use("/login", loginRoute);
app.use("/messages", messagesRoute);

module.exports = app;