require('dotenv').config();
const express = require('express');
const cors = require('cors')
const directionRouter = require('./routes/direction.route');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/v1/directions', directionRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});