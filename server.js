const express = require('express');

const app = express();

app.use(express.static('build'));

app.listen(
    process.env.PORT,
    () => console.log(`listening on port ${process.env.PORT}`)
);

