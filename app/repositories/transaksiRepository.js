const {transaksi} = require('../models')

const getAllTransaksi = () => {
    return transaksi.findAll()
}

const createTransaksi = (data) => {
    return transaksi.create(data)
}

const updateTransaksi = (data, id) => {
    return transaksi.update(data, {
        where: {
            id: id
        }
    })
}

const deleteTransaksi = (id) => {
    return transaksi.destroy({
        where: {
            id: id
        }
    })
}

module.exports = {
    getAllTransaksi,
    createTransaksi,
    updateTransaksi,
    deleteTransaksi
}