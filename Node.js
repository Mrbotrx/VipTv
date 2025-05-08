const express = require('express');
const axios = require('axios');
const app = express();

app.get('/combined', async (req, res) => {
  try {
    const [res1, res2, res3] = await Promise.all([
      axios.get('https://api1.example.com'),
      axios.get('https://api2.example.com'),
      axios.get('https://api3.example.com'),
      // Add up to 10 APIs
    ]);

    res.json({
      api1: res1.data,
      api2: res2.data,
      api3: res3.data,
      // Combine results
    });
  } catch (err) {
    res.status(500).json({ error: 'API fetch failed', details: err.message });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
