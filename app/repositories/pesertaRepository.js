const {peserta} = require('../models')

const getAllPeserta = () => {
    return peserta.findAll()
}

const createPeserta = (data) => {
    return peserta.create(data)
}

const updatePeserta = (data, id) => {
    return peserta.update(data, {
        where: {
            id: id
        }
    })
}

const deletePeserta = (id) => {
    return peserta.destroy({
        where: {
            id: id
        }
    })
}

module.exports = {
    getAllPeserta,
    createPeserta,
    updatePeserta,
    deletePeserta
}