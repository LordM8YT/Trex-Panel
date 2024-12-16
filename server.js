
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Dummy Data
let servers = [
  { id: 1, name: 'Server One', status: 'Online', players: 10 },
  { id: 2, name: 'Server Two', status: 'Offline', players: 0 },
  { id: 3, name: 'Server Three', status: 'Online', players: 25 }
];

// Routes
app.get('/api/servers', (req, res) => {
  res.json(servers);
});

app.post('/api/servers', (req, res) => {
  const { name, status, players } = req.body;
  const newServer = { id: servers.length + 1, name, status, players };
  servers.push(newServer);
  res.status(201).json(newServer);
});

app.listen(port, () => {
  console.log(`Trex Panel backend kjører på http://localhost:${port}`);
});
