const pesertaRepository = require('../repositories/seminarRepository');

const getAllPeserta = async () => {
    try{
        const pesertas = seminarRepository.getAllPeserta();
        return pesertas;
    }
    catch(err){
        throw err;
    }
}

const createPeserta = async (data) => {
    try{
        const peserta = seminarRepository.createPeserta(data);
        return peserta;
    }
    catch(err){
        throw err;
    }
}

const updatePeserta = async (data, id) => {
    try{
        const peserta = seminarRepository.updatePeserta(data, id);
        return peserta;
    }
    catch(err){
        throw err;
    }
}


const deletePeserta = async (id) => {
    try{
        const peserta = seminarRepository.deletePeserta(id);
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