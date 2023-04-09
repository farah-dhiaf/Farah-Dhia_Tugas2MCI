const tiketRepository = require('../repositories/tiketRepository');

const getAllTiket = async () => {
    try{
        const tikets = tiketRepository.getAllTiket();
        return tikets;
    }
    catch(err){
        throw err;
    }
}

const createTiket = async (data) => {
    try{
        const tiket = tiketRepository.createTiket(data);
        return tiket;
    }
    catch(err){
        throw err;
    }
}

const updateTiket = async (data, id) => {
    try{
        const tiket = tiketRepository.updateTiket(data, id);
        return tiket;
    }
    catch(err){
        throw err;
    }
}

const deleteTiket = async (id) => {
    try{
        const tiket = tiketRepository.deleteTiket(id);
        return tiket;
    }
    catch(err){
        throw err;
    }
}

module.exports = {
    getAllTiket,
    createTiket,
    updateTiket,
    deleteTiket
}