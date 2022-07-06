const db = require("../../database/database.js")

class UsersRepository {
    getAll = () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM users ', (error, elements) => {
                if (error) return reject(error)
                return resolve(elements)
            })
        })
    }

    addUser = user => {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO users SET ?', user, (error, result) => {
                if (error) return reject(error)
                return resolve(user)
            })
        })
    }

    userExists = email => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT COUNT(*) AS existingUser FROM users WHERE email="${email}"`, (error, elements) => {
                if (error) return reject(error)
                return resolve(elements[0].existingUser)
            })
        })
    }
}

module.exports = new UsersRepository