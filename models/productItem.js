
module.exports = (sequelize, DataTypes) => {

    const ProductItem = sequelize.define("productItem", {
        color: {
            type:DataTypes.ENUM('red', 'green','blue'),
            allowNull: false
        },
        size: {
            type:DataTypes.ENUM('XS', 'S','M','L','XL','XXL'),
            allowNull: false
        },
        price:{
            type:DataTypes.DECIMAL(20, 2),
            allowNull: false
        }
    })

    return ProductItem

}