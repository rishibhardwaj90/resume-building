const express = require('express'); 
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const app = express();
mongoose.connect('mongodb://localhost/resume-builder', { useNewUrlParser: true, useUnifiedTopology: true });
app.use(bodyParser.json());
app.use('/api/auth', authRoutes);
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});