//#region Packages
const express = require('express');
const cors = require('cors');
const app = express();
//#endregion

//#region Variables
const _port = 3000;
//#endregion

//#region express Config
app.use(cors());
app.use(express.static(`${__dirname}/../Frontend/Dist`, { index: 'index.html' }));
//#endregion

app.listen(_port, () => {
	console.log(`Server started at http://127.0.0.1:${_port}`);
});
