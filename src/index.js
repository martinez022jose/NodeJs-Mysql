const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const { urlencoded } = require('express');

//Initialization
const app = express();

//Settings
app.set('port', process.env.PORT || 4000);
app.use(express.json());

//Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());

//Routes
//app.use(require('./routes/routes.js'));
app.use('/axios', require('./routes/axiosRoutes.js'));
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));

//Listening
app.listen(app.get('port'), () =>{ 
    console.log(`app listening...${app.get('port')}`);
});
