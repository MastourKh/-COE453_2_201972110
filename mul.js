const functions = require('@google-cloud/functions-framework');

functions.http('mul', (req, res) => {
  const { num1, num2 } = req.body;
  const result = num1 * num2;
  res.status(200).json({ result });
});
