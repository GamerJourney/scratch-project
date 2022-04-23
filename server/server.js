const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const vocabListRouter = require('./Routes/vocabLists');

//import Routes/vocabList

// const apiRouter = require('./Routes/vocabLists');

app.use(express.static(path.resolve(__dirname,'./client')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/vocab', vocabListRouter);

// app.use((req,res)=>{
//   res.status(404).send('Error');
// });

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
