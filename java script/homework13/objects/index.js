const obj = {}
console.log(obj)

const User = {
    name: "Harel", id: 1235435, age: 20, phoneNumber: "0507998879",
    sayHi: function () { console.log(`Hi my name is : ${this.name}`) }
}
console.log(User)
console.log(User.sayHi())
const y = User.sayHi
y()
const DLAmir = { name: "Amir", ls: ["B", "A2"] }