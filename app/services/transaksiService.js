const transaksiRepository = require('../repositories/transaksiRepository');

const getAllTransaksi = async () => {
    try{
        const transaksis = transaksiRepository.getAllTransaksi();
        return transaksis;
    }
    catch(err){
        throw err;
    }
}

const createTransaksi = async (data) => {
    try{
        const transaksi = transaksiRepository.createTransaksi(data);
        return transaksi;
    }
    catch(err){
        throw err;
    }
}

const updateTransaksi = async (data, id) => {
    try{
        const transaksi = transaksiRepository.updateTransaksi(data, id);
        return transaksi;
    }
    catch(err){
        throw err;
    }
}

const deleteTransaksi = async (id) => {
    try{
        const transaksi = transaksiRepository.deleteTransaksi(id);
        return transaksi;
    }
    catch(err){
        throw err;
    }
}

module.exports = {
    getAllTransaksi,
    createTransaksi,
    updateTransaksi,
    deleteTransaksi
}