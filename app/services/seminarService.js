const seminarRepository = require('../repositories/seminarRepository');

const getAllSeminar = async () => {
    try{
        const seminars = seminarRepository.getAllSeminar();
        return seminars;
    }
    catch(err){
        throw err;
    }
}

const createSeminar = async (data) => {
    try{
        const seminar = seminarRepository.createSeminar(data);
        return seminar;
    }
    catch(err){
        throw err;
    }
}

const updateSeminar = async (data, id) => {
    try{
        const seminar = seminarRepository.updateSeminar(data, id);
        return seminar;
    }
    catch(err){
        throw err;
    }
}


const deleteSeminar = async (id) => {
    try{
        const seminar = seminarRepository.deleteSeminar(id);
        return seminar;
    }
    catch(err){
        throw err;
    }
}

module.exports = {
    getAllSeminar,
    createSeminar,
    updateSeminar,
    deleteSeminar
}