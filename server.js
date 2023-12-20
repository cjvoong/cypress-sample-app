const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

const orders = [];

app.post('/submitOrder', (req, res) => {
  const order = req.body;
  orders.push(order);

  // Here, you can perform further processing, store the order in a database, etc.

  res.json({ message: 'Order received successfully.' });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

