'use strict'

module.exports = function (app) {

    app.use('/', require('./index'));
    app.use('/keys', require('./keys'));
    app.use('/signatures', require('./signatures'));
    app.use('/transaction', require('./transaction'));
    app.use('/blockchain', require('./blockchains'));
    app.use(function (req, res) {
        if (!res.headersSent) {
            res.status(404).render('404');
        }
    })
}