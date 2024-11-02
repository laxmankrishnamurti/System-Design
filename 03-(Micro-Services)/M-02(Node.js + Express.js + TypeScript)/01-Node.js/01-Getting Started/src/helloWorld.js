const {createServer} = require("node:http");

const PORT = 3000;

const server = createServer((req, res) => {
    res.end("<h1>Hello world!</h1>")
})

console.log(server)

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})