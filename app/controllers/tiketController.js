const tiketService = require('../services/tiketService')

const getAllTiket = (req, res) => {
    tiketService.getAllTiket()
    .then(tikets => {
        res.status(200).json({
            status: 'success',
            message: 'Success get all data tiket',
            data: tikets
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

const createTiket = (req, res) => {
    const data = req.body;
    tiketService.createTiket(data)
    .then(tiket => {
        if(!tiket){
            res.status(400).json({
                status: 'error',
                message: 'Failed create tiket',
                data: tiket
            })
        }
        res.status(200).json({
            status: 'success',
            message: 'Success create tiket',
            data: tiket
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

const updateTiket = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    tiketService.updateTiket(data, id)
    .then(tiket => {
        if(!tiket){
            res.status(400).json({
                status: 'error',
                message: 'Failed update tiket',
                data: tiket
            })
        }
        res.status(200).json({
            status: 'success',
            message: 'Success update tiket',
            data: tiket
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

const deleteTiket = (req, res) => {
    tiketService.deleteTiket(req.params.id)
      .then((tiket) => {
        res.status(200).json({
          status: "success",
          message: "tiket deleted successfully",
          data: tiket,
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
    getAllTiket,
    createTiket,
    updateTiket,
    deleteTiket
}