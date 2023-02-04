
const bcrypt = require("bcrypt")
const { Users } = require("../module/Schema")

const userSignup = async (req, res) => {
    const { email, mobile, password } = req.body
    try {
        let isUser = await Users.findOne({ email })
        // console.log(currentUser)
        if (!isUser) {
            bcrypt.hash(password, 10, async (err, hashed) => {
                await Users.create({ email, mobile, password: hashed })
            })
            res.json({message: "Registration sucessfull !"})
        }
        else {
            res.json({message: "Email already Exist!"})
        }
    }
    catch (err) {
        res.json({message: err.message})
    }
}

const userLogin = async (req, res) => {
    const { email, password } = req.body
    try {
        const isUser = await Users.findOne({ email })
        if (!isUser) {
            res.json({ message: "User doesn't Exist!" })
        }
        else {
            const isPassword = await bcrypt.compare(password, isUser.password)
            if (!isPassword) {
                res.json({ message: "Invalid credentials" })
            }
            else {
                res.json({ message: "logged in" })
            }
        }
    }
    catch (err) {
        res.json({message: err.message})
    }
}
module.exports = { userSignup, userLogin }