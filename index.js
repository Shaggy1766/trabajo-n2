const Manager = require('./manager.js')
const manager = new Manager ()

let item = {
    title: "control xbox",
    price: 56,
    description: "control para videojuegos"
}

manager.createItem(item).then(result => console.log(result))
manager.findAll().then(result => console.log(resultado))