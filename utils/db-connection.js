const mysql=require('mysql2');

const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'0323',
    database:'testdb'
})

connection.connect((err)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log("connection has been created")

    const createStudentTable=`create table IF NOT EXISTS students(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30),
    email VARCHAR(30),
    age INT
    )`
     
     connection.execute(createStudentTable,(err)=>{
        if(err){
            console.log(err)
            connection.end()
            return;
        }
        console.log("student table created")
    })
   
    
})

module.exports=connection