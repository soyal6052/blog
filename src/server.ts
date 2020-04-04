import * as express from 'express';

import { apiV1 } from './api-v1';
const app = express();

const PORT = Number(process.env.PORT) || 8080;
app.use('/api/v1', apiV1);



app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
});
