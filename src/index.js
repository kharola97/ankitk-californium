const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const {middlewareapp} = require('./middlewares/reusemiddle')
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(middlewareapp)


mongoose.connect("mongodb+srv://functionup-cohort:G0Loxqc9wFEGyEeJ@cluster0.rzotr.mongodb.net/Pritesh8769811-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

app.use('/', route);
// unreachable becuase the cycle has terminated
app.use(
    function (req, res, next) {
        console.log("inside GLOBAL MW");
        next();
    }
);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
