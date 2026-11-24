const express = require('express');

const app = express();

app.get('/status', (req, res) => {
  res.status(200).json({
    status: 'ok',
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString()
  });
});

module.exports = app;
