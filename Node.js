const express = require('express');
const axios = require('axios');
const app = express();

app.get('/combined', async (req, res) => {
  try {
    const [res1, res2, res3] = await Promise.all([
      axios.get('https://bikroy.com/data/phone_number_login/verifications/phone_login?phone='),
      axios.get('https://prod-services.toffeelive.com/sms/v1/subscriber/otp'),
      axios.get('https://api.rockstreamer.com/otp/api/v1/phone/otp'),
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
