const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const {middlewareapp} = require('./middlewares/reusemiddle')
const { default: mongoose } = require('mongoose');
mongoose.set('strictQuery', true);
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//app.use(middlewareapp)


mongoose.connect("mongodb+srv://ankitdb:ankit321@cluster0.nz06g9j.mongodb.net/assignmentMW2-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

app.use('/', route);
// unreachable becuase the cycle has terminated
// app.use(
//     function (req, res, next) {
//         console.log("inside GLOBAL MW");
//         next();
//     }



app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
