const pesertaRepository = require('../repositories/pesertaRepository');

const getAllPeserta = async () => {
    try{
        const peserta = pesertaRepository.getAllPeserta();
        return peserta;
    }
    catch(err){
        throw err;
    }
}

const createPeserta = async (data) => {
    try{
        const peserta = pesertaRepository.createPeserta(data);
        return peserta;
    }
    catch(err){
        throw err;
    }
}

const updatePeserta = async (data, id) => {
    try{
        const peserta = pesertaRepository.updatePeserta(data, id);
        return peserta;
    }
    catch(err){
        throw err;
    }
}


const deletePeserta = async (id) => {
    try{
        const peserta = pesertaRepository.deletePeserta(id);
        return peserta;
    }
    catch(err){
        throw err;
    }
}

module.exports = {
    getAllPeserta,
    createPeserta,
    updatePeserta,
    deletePeserta
}