const express = require('express');
const router = express.Router();
const vocabController = require('../Controllers/vocabList');

router.get('/:id', vocabController.getVocabList, (req,res) => {
  return res.status(200).json(res.locals.vocabList);
});

// router.post('/',(req,res)=>{
//   res.status(200).json(res.locals.vocabList);
// });

module.exports = router;