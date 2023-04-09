const pesertaService = require('../services/pesertaService')

const getAllPeserta = (req, res) => {
    pesertaService.getAllPeserta()
    .then(peserta => {
        res.status(200).json({
            status: 'success',
            message: 'Success get all list peserta',
            data: peserta
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

const createPeserta = (req, res) => {
    const data = req.body;
    pesertaService.createPeserta(data)
    .then(peserta => {
        if(!peserta){
            res.status(400).json({
                status: 'error',
                message: 'Failed create peserta',
                data: peserta
            })
        }
        res.status(200).json({
            status: 'success',
            message: 'Success create peserta',
            data: peserta
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

const updatePeserta = (req, res) => {
    pesertaService.updatePeserta(req.params.id, req.body)
      .then((peserta) => {
        res.status(200).json({
          status: "success",
          message: "peserta updated successfully",
          data: peserta,
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


const deletePeserta = (req, res) => {
    pesertaService.deletePeserta(req.params.id)
      .then((peserta) => {
        res.status(200).json({
          status: "success",
          message: "peserta deleted successfully",
          data: peserta,
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
    getAllPeserta,
    createPeserta,
    updatePeserta,
    deletePeserta
}

