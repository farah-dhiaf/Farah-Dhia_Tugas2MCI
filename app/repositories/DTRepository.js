const {detail_transaksi} = require('../models')

const getAllDT = () => {
    return detail_transaksi.findAll()
}

const createDT = (data) => {
    return detail_transaksi.create(data)
}

const updateDT = (data, id) => {
    return detail_transaksi.update(data, {
        where: {
            id: id
        }
    })
}

const deleteDT = (id) => {
    return detail_transaksi.destroy({
        where: {
            id: id
        }
    })
}

module.exports = {
    getAllDT,
    createDT,
    updateDT,
    deleteDT
}