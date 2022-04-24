const { ReactReduxContext } = require('react-redux');
const db = require('../Models/vocabListModel');

const vocabListController = {};

vocabListController.getVocabList = async (req, res, next) => {
  try {
    const { id } = req.params;
    const queryProps = [id];
    const sqlString = "Select * From vocabsets WHERE _id = ($1)";
    const data = await db.query(sqlString, queryProps);
    res.locals.vocabList = data.rows;
    return next();
  }
  catch (error) {
    return next({
      log: 'Express error handler caught error in vocabListController.getVocabList',
      status: 404,
      message: { err: 'An error occurred' },
    });
  }
};


vocabListController.postVocabList = async (req,res,next) => {
  try {
    const { topic, vocabobj, publicprivate, createdbyuser } = req.body;
    const queryProps = [topic, vocabobj, publicprivate, createdbyuser];
    const sqlString = "INSERT INTO vocabsets (topic, vocabobj, publicprivate, createdbyuser) VALUES ($1, $2, $3, $4)";
    await db.query(sqlString, queryProps);
    res.locals.newList = req.body;
    return next();
  }
  catch (error) {
    return next({
      log: 'Express error handler caught error in vocabListController.getVocabList',
      status: 404,
      message: { err: 'An error occurred' },
    });
  }
};


module.exports = vocabListController;


/*
{
  _id: 14,
  topic: ReactReduxContext,
  vocab-obj: {
    vocab: definition,
    vocab: definition,
    vocab: definition,
  },
  public-private: 'public',
  createdbyuser: 3
}
*/