import express from 'express'
import cors from 'cors'

const app = express();

app.use(cors());

app.post("/", async (req, res) => {
    const { token } = req.body;
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.MY_PASSWORD,
    });
});

app.use('/', (req, res) => {
  res.send({
    token: 'test123'
  });
});

app.listen(process.env.PORT || 5173, () => {
    console.log(
        `API is running on http://localhost:${process.env.PORT || 5173}`
    )
});