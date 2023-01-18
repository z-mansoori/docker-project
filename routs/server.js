const express = require('express');

const app = express();

const port = 8080;

app.get('/hello', (req, res) => {
    let responseData = "Hello ";
    let queryName = req.query.name;
    if (queryName) {
        let camelcaseWord = queryName.replace(/[A-Z]/g, ' $&').trim();
        responseData = (responseData + camelcaseWord).replace(/['"]+/g, '');
    } else {
        responseData = responseData + " Stranger";
    }

    res.status(200).send(responseData);
    log(req,res)
});

app.get('/author', (req, res) => {
    let responseData = "Zahra Mansouri";

    res.send(responseData);
    log(req,res)
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))

log=(request,response)=>{
    const { httpVersion, method, url } = request;
    const { statusCode, statusMessage } = response;
    console.log(
        JSON.stringify({
            timestamp:  new Date().toISOString().slice(0, 23),
            request:{
                method,
                url
            },
            response:{
                statusCode
            }
        })
    );
}
