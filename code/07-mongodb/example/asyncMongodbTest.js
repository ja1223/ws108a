const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'mytest';

async function main() {
  // Use connect method to connect to the server
  var client = await MongoClient.connect(url)//連線到資料庫伺服器
  console.log("Connected successfully to server")
  const db = client.db(dbName)//取出資料庫
  const collection = db.collection('documents')//取出資料表
  var iresult = await collection.insertMany([ {a : 1}, {a : 2}, {a : 3} ])
  console.log("iresult=", iresult)
  var docs = await collection.find({}).toArray()
  console.log('docs=', docs)
  client.close();//斷線
  return docs
}

main().catch(function (error) {
  console.log('error=', error)
})
