const {createServer} = require("node:http");

const PORT = 3000;

// console.log(createServer())
const server = createServer((req, res) => {
    res.end("<h1>Hello world!</h1>")
})

// console.log(server)

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})

server.close(() => {
    console.log("server is shutting down........")
    console.log("server has been closed")
})
