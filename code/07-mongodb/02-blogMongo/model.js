const M = module.exports = {}
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const ObjectID = mongodb.ObjectID
const url = 'mongodb://localhost:27017'
const dbName = 'blog'
var client, db, posts
//將資料存在硬碟，重開的話資料不會消失
M.open = async function () {
  client = await MongoClient.connect(url, {useUnifiedTopology: true, useNewUrlParser: true})
  //{useUnifiedTopology: true, useNewUrlParser: true} 根據警告的指示增加的新版的功能
  db = await client.db(dbName)
  posts = await db.collection('posts')
}

M.clear = async function () {
  await posts.drop()
}

M.close = async function () {
  await client.close()
}

M.add = async function (post) {
  post.created_at = new Date()
  let r = await posts.insertOne(post)
  post._id = r.insertedId
 return post
}

M.get = async function (id) {
  let post = await posts.findOne({_id:new ObjectID(id)})
  console.log('get: post=', post)
  return post
}

M.list = async function () {
  var postList = await posts.find({}).sort({ created_at: -1 }).toArray()
  console.log('postList = ', postList)
  return postList
}
