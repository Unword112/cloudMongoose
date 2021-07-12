const express = require('express');
const morgan = require('morgan');

//const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

//connect to mongoDB
mongoose.connect(process.env.DATABASE_CLOUD , {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
.then(() => console.log('DB connected') )
.catch(err => console.log('DB connection error', err) )

app.use(morgan('dev'));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

//import routes
const indexRoutes = require('./routes/index');
const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/category');

//middleware
app.use('/api', indexRoutes);
app.use('/api', userRoutes);
app.use('/api', categoryRoutes);

const port = process.env.PORT || 8000;
app.listen(port , () => {
    console.log(`Server run on http://localhost:${port}`)
} )
