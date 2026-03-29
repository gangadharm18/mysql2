const {DataTypes}=require('sequelize')
const sequelize=require('../utils/db-connection')

const identityCard=sequelize.define('identityCard',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    cardNumber:{
        type:DataTypes.INTEGER,
        allowNull:false
     
    },
   
})
module.exports=identityCard;