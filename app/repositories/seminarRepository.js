const {seminar} = require('../models')

const getAllSeminar = () => {
    return seminar.findAll()
}

// const createSeminar = (data) => {
//     return seminar.create(data)
// }

// const updateSeminar = (id, data) => {
//     return seminar.update(data, {
//         where: {
//             id: id
//         }
//     })
// }

// const deleteSeminar = (id) => {
//     return seminar.destroy({
//         where: {
//             id: id
//         }
//     })
// }

module.exports = {
    getAllSeminar
    // createSeminar,
    // updateSeminar,
    // deleteSeminar
}