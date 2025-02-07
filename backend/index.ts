import express from 'express';
import apiRoutes from './routes/files';

const app = express();

app.use('/', apiRoutes);

app.listen(3000, () => {
    console.log('listening on http://localhost:3000');
});
