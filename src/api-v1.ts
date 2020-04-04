import * as express from 'express';

const app = express();
app.use(express.json());

app.get('/test', async (req, res) => {
    
    res.json({hello : "hi"});
})

export {
    app as apiV1
}
