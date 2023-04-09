const transaksiService = require('../services/transaksiService')

const getAllTransaksi = (req, res) => {
    transaksiService.getAllTransaksi()
    .then(transaksis => {
        res.status(200).json({
            status: 'success',
            message: 'Success get all data transaksi',
            data: transaksis
        })
    })
    .catch(err => {
        res.status(500).json({
            status: 'error',
            message: 'internal server error',
            data: err
        })
    })
}

const createTransaksi = (req, res) => {
    const data = req.body;
    transaksiService.createTransaksi(data)
    .then(transaksi => {
        if(!transaksi){
            res.status(400).json({
                status: 'error',
                message: 'Failed create transaksi',
                data: transaksi
            })
        }
        res.status(200).json({
            status: 'success',
            message: 'Success create transaksi',
            data: transaksi
        })
    })
    .catch(err => {
        res.status(500).json({
            status: 'error',
            message: 'internal server error',
            data: err
        })
    })
}

const updateTransaksi = (req, res) => {
    const data = req.body;
    const id = req.params.nrp;
    transaksiService.updateTransaksi(data, id)
    .then(transaksi => {
        if(!transaksi){
            res.status(400).json({
                status: 'error',
                message: 'Failed update transaksi',
                data: transaksi
            })
        }
        res.status(200).json({
            status: 'success',
            message: 'Success update transaksi',
            data: transaksi
        })
    })
    .catch(err => {
        res.status(500).json({
            status: 'error',
            message: 'internal server error',
            data: err
        })
    })
}

const deleteTransaksi = (req, res) => {
    transaksiService.deleteTransaksi(req.params.id)
      .then((transaksi) => {
        res.status(200).json({
          status: "success",
          message: "transaksi deleted successfully",
          data: transaksi,
        });
      })
      .catch((error) => {
        res.status(500).json({
          status: "error",
          message: error.message,
          data: error,
        });
      });
  };

module.exports = {
    getAllTransaksi,
    createTransaksi,
    updateTransaksi,
    deleteTransaksi
}