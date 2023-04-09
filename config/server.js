const cors = require('cors');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const seminarRoute = require('../app/routes/seminarRoute');
// const tiketRoute = require('../app/routes/tiketRoute');
// const pesertaRoute = require('../app/routes/pesertaRoute');
// const transaksiRoute = require('../app/routes/transaksiRoute');
// const DTRoute = require('../app/routes/DTRoute');

app.get('/', (req, res) => res.send('Tugas 2 Camin MCI 2023 Farah Dhia Fadhila '));
app.listen(port, () => console.log(`Server berjalan di http://localhost:${port}`));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/seminar', seminarRoute);
// app.use('/tiket', tiketRoute);
// app.use('/peserta', pesertaRoute);
// app.use('/transaksi', transaksiRoute);
// app.use('/detail-transaksi', DTRoute);
module.exports = app;