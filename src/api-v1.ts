import * as express from 'express';

const app = express();
app.use(express.json());

app.get('/test', async (req, res) => {
    
    res.json({hello : "hi"});
})
app.get('/user',async (req,res) => {
res.json({name :"soyal"});
} )
export {
    app as apiV1
}
