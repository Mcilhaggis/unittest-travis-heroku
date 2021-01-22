module.exports = (app) => {
    const responseFn = (req, res) => {
        /* the comment below causes eslint to ignore the console.log when checking for issues */
        // eslint-disable-next-line no-console
        console.log('value of req = \n', req);

        res.send('Testing CI with Travis v.3.0 ');
    };
    //
    app.get("/", responseFn);



};