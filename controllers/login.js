// const login = (req, res) => {
//     const { username, password } = req.body
//     if (username === "admin" && password === "1234") {
//         const token = jwt.sign({ username }, 'unrKqOH3YiAHOueHkjabqhHxwQEVlw0UC7lBOAeiFl2gwymvqJRtUKY3NEXLbEP')
//         res.json({ message: "Login exitoso", token })
//     } else {
//         res.json({ message: "Credenciales incorrectas" })
//     }
// }
// module.exports = { login }