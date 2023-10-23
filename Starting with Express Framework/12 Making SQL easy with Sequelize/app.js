const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require("./util/database");//Importing database object

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

//executing query 
// db.execute('select * from products').then((result)=>{
// console.log(result[0][0].id);
// }).catch((err)=>{
//     console.log(err);
// })
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

sequelize.sync().then((res)=>{
    console.log(res);
}).catch((err)=>{
console.log(err);
});
app.listen(3000);
