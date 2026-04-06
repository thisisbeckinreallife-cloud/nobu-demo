const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

const publicPath = path.join(__dirname, 'public');

app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(PORT, HOST, () => {
  console.log(`Nobú Beauty Club demo running on ${HOST}:${PORT}`);
});
