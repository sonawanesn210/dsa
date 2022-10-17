const express = require('express');
const app=express()
const port =3000
//const router = express.Router();

app.get('/test-me', function (req, res) {
    for (let i=1;i<=10;i++){
        console.log(2*i)
    }
});

//app.use('/', router);

app.listen(port, function() {
    console.log('Express app running on port ', port)
});
