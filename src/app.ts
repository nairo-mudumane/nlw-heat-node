import 'dotenv/config';
import express from 'express';
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/github', (req, res) => {
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
  );
});

app.get('/signin/calback', (req, res) => {
  const { code } = req.query;
  return res.json(code);
});

app.listen(PORT, () => console.log(`running on: ${PORT}`));
