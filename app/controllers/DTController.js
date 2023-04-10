const DTService = require('../services/DTService')

const getAllDT = (req, res) => {
    DTService.getAllDT()
    .then(detail_transaksis => {
        res.status(200).json({
            status: 'success',
            message: 'Success get all data detail_transaksi',
            data: detail_transaksis
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

const createDT = (req, res) => {
    const data = req.body;
    DTService.createDT(data)
    .then(detail_transaksi => {
        if(!detail_transaksi){
            res.status(400).json({
                status: 'error',
                message: 'Failed create detail_transaksi',
                data: detail_transaksi
            })
        }
        res.status(200).json({
            status: 'success',
            message: 'Success create detail_transaksi',
            data: detail_transaksi
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

const updateDT = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    DTService.updateDT(data, id)
    .then(detail_transaksi => {
        if(!detail_transaksi){
            res.status(400).json({
                status: 'error',
                message: 'Failed update detail_transaksi',
                data: detail_transaksi
            })
        }
        res.status(200).json({
            status: 'success',
            message: 'Success update detail_transaksi',
            data: detail_transaksi
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

const deleteDT = (req, res) => {
    DTService.deleteDT(req.params.id)
      .then((detail_transaksi) => {
        res.status(200).json({
          status: "success",
          message: "detail_transaksi deleted successfully",
          data: detail_transaksi,
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
    getAllDT,
    createDT,
    updateDT,
    deleteDT
}