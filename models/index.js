const students=require('./student')
const identityCard=require('./identitycard')
const department=require('./department')

//one to one
students.hasOne(identityCard)
identityCard.belongsTo(students)

//one to many
department.hasMany(students)
students.belongsTo(department)

module.exports={
    students,
    identityCard,
    department
}