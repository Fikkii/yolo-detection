const express = require('express');
const http = require('http');
const path = require('path')
const { Server } = require('socket.io');
const axios = require('axios');

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

// Serve static frontend
app.use(express.static(path.join(__dirname, 'frontend')));

// Optional: default route to index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

io.on('connection', (socket) => {
  console.log('Client connected');

socket.on('frame', async (data) => {
  try {
    const res = await axios.post('http://localhost:5001/detect', { image: data });
    socket.emit('annotated', res.data.detections);
  } catch (e) {
    console.error('Error:', e);
    socket.emit('annotated', []); // send empty detection so frontend keeps looping
  }
});

  socket.on('disconnect', () => console.log('Client disconnected'));
});

server.listen(5000, () => console.log('Node.js server listening on http://localhost:5000'));

