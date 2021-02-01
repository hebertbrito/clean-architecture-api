import app from './config/app'
var port = process.env.PORT || 3080;

app.listen(port, () => {
    // console.log(app.)
    console.log(`Serve is running in port ${port}.`);
})