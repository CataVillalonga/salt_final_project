import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
const env = dotenv.config().parsed;

const url = env.mongoURL;
const dbName = 'projectdb';

let client;
let categories;
let carts;
let accounts;

const connectCategory = async () => {
  client = await MongoClient.connect(url, { useNewUrlParser: true }, { useUnifiedTopology: true });
  const db = client.db(dbName);
  categories = db.collection('categories');
};

const connectCart = async () => {
  client = await MongoClient.connect(url, { useNewUrlParser: true }, { useUnifiedTopology: true });
  const db = client.db(dbName);
  carts = db.collection('carts');
};

const numericPrice = (price) => {
  const str = price.replace(/[^A-Z0-9]/ig, "");
  const newPrice = Number(str);
  return newPrice;
}

const totalPrice = productArr => {
  let total = 0;
  productArr.forEach(obj => {
    total += obj.price;
  });
  return total;
};

export const getCategories = async () => {
  await connectCategory();
  const allCategories = await categories.find().toArray();
  setTimeout(() => client.close(), 1000);
  return allCategories;
};

export const getCart = async (username) => {
  await connectCart();
  const cart = await carts.find({username: username}).toArray();
  setTimeout(() => client.close(), 1000);
  return cart;
};

export const postCart = async (username, product) => {
  await connectCart();
  const { id, name, price, img } = product;
  const newPrice = numericPrice(price);
  const item = {
    productId: id,
    name: name,
    price: newPrice,
    img: img
  }
  const cart = {
    username: username,
    products: [item],
    total_items: 1,
    total_price: newPrice,
  }
  carts.insertOne(cart);
  setTimeout(() => client.close(), 1000);
  return cart;
};

export const updateCart = async (username, product) => {
  await connectCart();
  const { id, name, price, img } = product;
  const cart = await carts.find({username: username}).toArray()
  const productsArr = cart[0].products;
  const newPrice = numericPrice(price);
  const item = {
    productId: id,
    name: name,
    price: newPrice,
    img: img
  }

  productsArr.push(item);

  await carts.updateOne(
    { username: username },
    {
      $set: {
        products: productsArr,
        total_items: productsArr.length,
        total_price: totalPrice(productsArr),
      },
    },
  );
}

export default { getCategories, getCart, postCart, updateCart }; 
