const router = require('express').Router();
const transaksiController = require('../controllers/transaksiController');

router.get('/', transaksiController.getAllTransaksi);
router.post('/', transaksiController.createTransaksi);
router.put('/:id', transaksiController.updateTransaksi);
router.delete('/:id', transaksiController.deleteTransaksi);

module.exports = router;