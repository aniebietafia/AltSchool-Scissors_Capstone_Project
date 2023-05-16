import express from 'express';

const app = express();

const PORT: number = 4000;

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
