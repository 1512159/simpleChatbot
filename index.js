const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


   const verificationController = require('./controllers/verification');
   const messageWebhookController = require('./controllers/messengerWebHook');
   app.get('/', verificationController);
   app.post('/', messageWebhookController);

app.listen(3000, () => console.log('Webhook server is listening, port 3000'));

app.get('/',function(req,res){
    res.json(1116069468)
})