const DTRepository = require('../repositories/DTRepository');

const getAllDT = async () => {
    try{
        const detail_transaksis = DTRepository.getAllDT();
        return detail_transaksis;
    }
    catch(err){
        throw err;
    }
}

const createDT = async (data) => {
    try{
        const detail_transaksi = DTRepository.createDT(data);
        return detail_transaksi;
    }
    catch(err){
        throw err;
    }
}

const updateDT = async (data, id) => {
    try{
        const detail_transaksi = DTRepository.updateDT(data, id);
        return detail_transaksi;
    }
    catch(err){
        throw err;
    }
}

const deleteDT = async (id) => {
    try{
        const detail_transaksi = DTRepository.deleteDT(id);
        return detail_transaksi;
    }
    catch(err){
        throw err;
    }
}

module.exports = {
    getAllDT,
    createDT,
    updateDT,
    deleteDT
}