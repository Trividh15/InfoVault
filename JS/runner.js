const express = require('express');
const app = express();
const path = require('path');


const assetsPath = path.join(__dirname, 'assets');


app.use('/assets', express.static(assetsPath));


app.get('/:pageName', (req, res) => {
    const pageName = req.params.pageName;
    const filePath = path.join(__dirname, `${pageName}`);
    res.sendFile(filePath);
});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});