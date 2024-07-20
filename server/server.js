const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/auth', authRoutes);

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
