const {Shop} = require('./shop')
module.exports = (sequelize, DataTypes) => {

    const Product = sequelize.define("product", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT
        },
        type:{
            type:DataTypes.ENUM('shoes', 'shirts','jeans')
        }
    })



    return Product

}