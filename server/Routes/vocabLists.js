const express = require('express');
const router = express.Router();
const vocabController = require('../Controllers/vocabList');

router.get('/:id', vocabController.getVocabList, (req,res) => {
  return res.status(200).json(res.locals.vocabList);
});

router.post('/', vocabController.postVocabList, (req,res) => {
  res.status(200).json(res.locals.newList);
});

module.exports = router;