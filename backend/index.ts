// pyxfluff 2025

import express from 'express';
const bodyParser = require("body-parser")
import { JSONFilePreset } from 'lowdb/node';

import apiRoutes from './routes/files';
import uploadRoutes from './routes/uploader';

const app = express();

export const db = await JSONFilePreset('data.json', {
    links: {},
    files: {},
    plainTexts: {}
})

app.use( bodyParser.json() );

app.use('/', apiRoutes);
app.use('/upload', uploadRoutes);

app.listen(3000, () => {
    console.log('listening on http://localhost:3000');
});
