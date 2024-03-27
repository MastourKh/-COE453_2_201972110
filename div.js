const functions = require('@google-cloud/functions-framework');

functions.http('div', (req, res) => {
  const { num1, num2 } = req.body;
  if (num2 === 0) {
    res.status(400).json({ error: "Divisor cannot be zero!" });
  } else {
    const result = num1 / num2;
    res.status(200).json({ result });
  }
});
