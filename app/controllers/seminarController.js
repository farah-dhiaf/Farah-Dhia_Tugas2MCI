const seminarService = require('../services/seminarService')

const getAllSeminar = (req, res) => {
    seminarService.getAllSeminar()
    .then(seminars => {
        res.status(200).json({
            status: 'success',
            message: 'Success get all list seminar',
            data: seminars
        })
    })
    .catch(err => {
        res.status(500).json({
            status: 'error',
            message: 'internal server error',
            data: err
        })
    })
}

// const createSeminar = (req, res) => {
//     const data = req.body;
//     seminarService.createSeminar(data)
//     .then(seminar => {
//         if(!seminar){
//             res.status(400).json({
//                 status: 'error',
//                 message: 'Failed create seminar',
//                 data: seminar
//             })
//         }
//         res.status(200).json({
//             status: 'success',
//             message: 'Success create seminar',
//             data: seminar
//         })
//     })
//     .catch(err => {
//         res.status(500).json({
//             status: 'error',
//             message: 'internal server error',
//             data: err
//         })
//     })
// }

// const updateSeminar = (req, res) => {
//     seminarService.updateSeminar(req.params.id, req.body)
//       .then((seminar) => {
//         res.status(200).json({
//           status: "success",
//           message: "seminar updated successfully",
//           data: seminar,
//         });
//       })
//       .catch((error) => {
//         res.status(500).json({
//           status: "error",
//           message: error.message,
//           data: error,
//         });
//       });
//   };

// // const updateSeminar = (req, res) => {
// //     const data = req.body;
// //     const id = req.params.id;
// //     seminarService.updateSeminar(data, id)
// //     .then(seminar => {
// //         if(!seminar){
// //             res.status(400).json({
// //                 status: 'error',
// //                 message: 'Failed update seminar',
// //                 data: seminar
// //             })
// //         }
// //         res.status(200).json({
// //             status: 'success',
// //             message: 'Success update seminar',
// //             data: seminar
// //         })
// //     })
// //     .catch(err => {
// //         res.status(500).json({
// //             status: 'error',
// //             message: 'internal server error',
// //             data: err
// //         })
// //     })
// // }

// const deleteSeminar = (req, res) => {
//     seminarService.deleteSeminar(req.params.id)
//       .then((seminar) => {
//         res.status(200).json({
//           status: "success",
//           message: "seminar deleted successfully",
//           data: seminar,
//         });
//       })
//       .catch((error) => {
//         res.status(500).json({
//           status: "error",
//           message: error.message,
//           data: error,
//         });
//       });
//   };

  module.exports = {
    getAllSeminar
    // createSeminar,
    // updateSeminar,
    // deleteSeminar
}

