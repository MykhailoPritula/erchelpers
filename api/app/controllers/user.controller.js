const UsersRepository = require('../repository/user.repository.js')
const UsersHelper = require('../helpers/user.helper.js')

class UsersController {
    async getAll(req, res) {
        try {
            const response = await UsersRepository.getAll()
            return res.status(200).json(response)
        } catch (err) {
            res.status(500).json({ status: "error", message: "Server Error" })
            throw err
        }
    }

    async addUser(req, res) {
        try {
            const passwordMatch = UsersHelper.passwordMatch(req.body.password, req.body.second_password)
            const existingUser = await UsersRepository.userExists(req.body.email)

            if (!existingUser) {
                if (passwordMatch) {
                    const response = await UsersRepository.addUser(req.body)
                    return res.status(201).json(response)
                } else {
                    return res.status(200).json({ status: "error", message: "Password Mismatch" })
                }
            } else {
                return res.status(200).json({ status: "error", message: "User Exists" })
            }
        } catch (err) {
            res.status(500).json({ status: "error", message: "Server Error" })
            throw err
        }
    }
}

module.exports = new UsersController