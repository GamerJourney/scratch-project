const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const vocabListRouter = require('./Routes/vocabLists');
const dotenv = require('dotenv');
const { OAuth2Client } = require('google-auth-library')

dotenv.config();
const client = new OAuth2Client(process.env.REACT_APP_GOOGLE_CLIENT_ID);

app.use(express.static(path.resolve(__dirname,'./client')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/vocab', vocabListRouter);

const users = [];

function upsert(array, item) {
  const i = array.findIndex((_item) => _item.email === item.email);
  if (i > -1) array[i] = item;
  else array.push(item);
}

app.post('/api/google-login', async (req, res) => {
  const { token } = req.body;
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.CLIENT_ID,
  });
  const { name, email, picture } = ticket.getPayload();
  upsert(users, { name, email, picture });
  res.status(201);
  res.json({ name, email, picture });
})

// serve index.html on the route '/'

app.get('/', (req, res) => res.status(200).sendFile(path.join(__dirname, '../client/index.html')));


app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unkown middleware error",
    status: 404,
    message: { err: 'An error occured'},
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).send(errorObj.message);
});


app.listen(3000); // listens on port 3000 -> http://localhost:3000/
