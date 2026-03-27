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
// const mysql=require('mysql2');

// const connection=mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'0323',
//     database:'testdb'
// })

// connection.connect((err)=>{
//     if(err){
//         console.log(err)
//         return;
//     }
//     console.log("connection has been created")

//     const createStudentTable=`create table IF NOT EXISTS students(
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     name VARCHAR(30),
//     email VARCHAR(30),
//     age INT
//     )`
     
//      connection.execute(createStudentTable,(err)=>{
//         if(err){
//             console.log(err)
//             connection.end()
//             return;
//         }
//         console.log("student table created")
//     })
   
    
// })

 