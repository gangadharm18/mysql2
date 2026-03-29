const {Sequelize}=require('sequelize')
const sequelize=new Sequelize('testdb','root','0323',{
    host:"localhost",
    dialect:"mysql"
});
(async()=>{try {
    await sequelize.authenticate();
    console.log("connection to dabase created")
} catch (error) {
    console.log(error)
}
})();
module.exports=sequelize;
