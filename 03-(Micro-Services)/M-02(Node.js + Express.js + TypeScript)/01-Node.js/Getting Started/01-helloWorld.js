import { createServer } from "http"

const port = 3000;

const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello world!')
})

// console.log(server)
// console.log(createServer())

server.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`)
})