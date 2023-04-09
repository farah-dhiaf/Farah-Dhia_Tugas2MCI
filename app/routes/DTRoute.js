const router = require('express').Router();
const DTController = require('../controllers/DTController');

router.get('/', DTController.getAllDT);
router.post('/', DTController.createDT);
router.put('/:id', DTController.updateDT);
router.delete('/:id', DTController.deleteDT);

module.exports = router;