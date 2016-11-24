import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/contacts-routes';

let app = express();
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/api', router);

app.listen(3000, () => {
    console.log('contacts-api listening on port 3000');
});
