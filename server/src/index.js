import express from 'express';
import { getCategories } from './mongodb';

const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.route('/')
  .get(async (req, res) => {
    const allCategories = await getCategories();
    res
      .json(allCategories)
      .status(200)
      .end();
  })

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));