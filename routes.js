const Router = require('express');






const firstroute = require('./routes/firstroute.js');




module.exports = Router()
    .use('/api/firstroute',firstroute)
    