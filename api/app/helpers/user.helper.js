class UsersCHelper {
    passwordMatch(password, second_password) {
        if (password == second_password) {
            return true
        }

        return false
    }
}

module.exports = new UsersCHelper