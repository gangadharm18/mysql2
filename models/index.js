const students=require('./student')
const identityCard=require('./identitycard')
const department=require('./department')
const courses=require('./course')
const studentCourses = require('./studentcourses')

//one to one
students.hasOne(identityCard)
identityCard.belongsTo(students)

//one to many
department.hasMany(students)
students.belongsTo(department)

//many to many association
students.belongsToMany(courses,{through:studentCourses})
courses.belongsToMany(students,{through:studentCourses})

module.exports={
    students,
    identityCard,
    department,
    courses,
    studentCourses
}