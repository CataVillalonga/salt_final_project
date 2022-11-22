import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
const env = dotenv.config().parsed;

const url = env.mongoURL;
// const url = "mongodb+srv://bobbybish81:MongoDBRocks!123@cluster0.eiymxut.mongodb.net/test";
const dbName = 'projectdb';

let client;
let categories;

const connect = async () => {
  client = await MongoClient.connect(url, { useNewUrlParser: true }, { useUnifiedTopology: true });
  const db = client.db(dbName);
  categories = db.collection('categories');
};

export const getCategories = async () => {
  await connect();
  const allCategories = await categories.find().toArray();
  setTimeout(() => client.close(), 1000);
  return allCategories;
};
export const postCategories = async (obj) => {
  await connect();
  categories.insertOne(obj);
  const allCategories = await categories.find().toArray();
  setTimeout(() => client.close(), 1000);
  return allCategories;
};


export default { getCategories, postCategories }; 
