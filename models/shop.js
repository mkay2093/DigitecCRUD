module.exports = (sequelize, DataTypes) => {

    const Shop = sequelize.define("shop", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT
        }
    })

    return Shop

}