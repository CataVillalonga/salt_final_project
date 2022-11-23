import express from 'express';
import { getCategories, getCart, postCart, updateCart } from './mongodb.js';

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

app.route('/carts')
  .post(async (req, res) => {
    const result = await getCart(req.body.username);
    if (result.length === 0) {
      const postedCart = await postCart(req.body.username, req.body.products)
      return res
      .json(postedCart)
      .status(201)
      .end();
    }
    await updateCart(req.body.username, req.body.products);
    const cart = await getCart(req.body.username);
    return res
    .json(cart)
    .status(200)
    .end();
  })

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
