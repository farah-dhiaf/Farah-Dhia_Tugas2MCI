const {tiket} = require('../models')

const getAllTiket = () => {
    return tiket.findAll()
}

const createTiket = (data) => {
    return tiket.create(data)
}

const updateTiket = (data, id) => {
    return tiket.update(data, {
        where: {
            id: id
        }
    })
}

const deleteTiket = (id) => {
    console.log(id);
    return tiket.destroy({
        where: {
            id: id
        }
    })
}

module.exports = {
    getAllTiket,
    createTiket,
    updateTiket,
    deleteTiket
}