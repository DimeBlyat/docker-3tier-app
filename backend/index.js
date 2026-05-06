const express = require('express');
const { Client } = require('pg');
const cors = require('cors');

const app = express();
app.use(cors());

const client = new Client({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
});

async function connectWithRetry() {
  try {
    await client.connect();
    console.log("Connected to DB");
  } catch (err) {
    console.log("DB not ready, retrying in 5 sec...");
    setTimeout(connectWithRetry, 5000);
  }
}

connectWithRetry();

app.get('/', (req, res) => {
  res.send("Backend is running");
});

app.get('/data', async (req, res) => {
  try {
    const result = await client.query('SELECT NOW()');
    res.json(result.rows);
  } catch (err) {
    res.status(500).send("DB error");
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
