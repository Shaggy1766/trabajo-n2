const fs = require('fs')
const { userInfo } = require('os')
const pathToFile = './items.json'


class Manager {
    createItem = async (item) => {
        if (!item.title || !item.price || !item.description) return {status: "error", message: "missing fields"}
        try {
            if (fs.existsSync(pathToFile)) {
                let data = await fs.promises.readFile(pathToFile, 'utf-8')
                let items = JSON.parse(data)
                let id = items[items.length-1].id+1
                item.id = id
                items.push(item)
                await fs.promises.writeFile(pathToFile, JSON.stringify(items, null, 2))
                return {status: "succes", message: "user create"}
            } else {
                items.id = 1
                await fs.promises.writeFile(pathToFile, JSON.stringify([item], null, 2))
                return {status: "succes", message: "item created"}
            }
        } catch(err) {
            return{status: "error", message: err.message}
        }
    }
    findAll = async () => {
        if (fs.existsSync(pathToFile)) {
            let data = await fs.promises.readFile(pathToFile, 'utf-8')
            let items = JSON.parse(data)
            return {status: "succes", message: "user create"}
        } else {
            return{status: "error", message: err.message}
        }
    }
}

module.exports = Manager