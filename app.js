const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('/views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

const indexRouter = require('./routes/indexRouter');
const productRouter = require('./routes/productRouter');
const categoryRouter = require('./routes/categoryRouter');

app.use('/', indexRouter);
app.use('/product', productRouter); 
app.use('/category', categoryRouter);


app.listen(port, console.log(`
*************************************
Server running in port ${port}
Link ---->> http://localhost:${port}
*************************************
`));