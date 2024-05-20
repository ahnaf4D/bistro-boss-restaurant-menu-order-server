const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
// middlewares
app.use(express.json());
app.use(cors());
// routes
app.get('/', (req, res) => {
  res.send('bistro boss restaurant here!!!');
});
app.listen(port, (req, res) => {
  console.log(`server listening on ${port}`);
});
