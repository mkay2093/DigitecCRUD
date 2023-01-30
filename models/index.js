require('dotenv').config();
const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
});


sequelize.authenticate()
    .then(() => {
        console.log('connected..')
    })
    .catch(err => {
        console.log('Error'+ err)
    })

const db = {}

db.sequelize = sequelize

db.products = require('./product.js')(sequelize, DataTypes)
db.productItems = require('./productItem.js')(sequelize, DataTypes)
db.shops = require('./shop.js')(sequelize, DataTypes)

db.shops.bulkCreate([
    {
        title:'ZARA',
        description:'Zara is one of the largest international fashion companies. It belongs to Inditex, one of the world’s largest distribution groups.'
    },
    {
        title:'Dolce & Gabbana',
        description:'Dolce & Gabbana, also known by initials D&G, is an Italian luxury fashion house founded in 1985 in Legnano by Italian designers Domenico Dolce and Stefano Gabbana. '
    },
    {
        title:'Adidas',
        description:'Adidas AG is a German multinational corporation, founded and headquartered in Herzogenaurach, Bavaria, that designs and manufactures shoes, clothing and accessories.'
    },
])

db.products.belongsTo(db.shops);
db.productItems.belongsTo(db.products);

db.sequelize.sync({ force: false })
    .then(() => {
        console.log('yes re-sync done!')
    })

module.exports = db