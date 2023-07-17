const express = require ('express')
const app = express()
const cors = require ('cors')
const port = 5000
const { getPosts, agregarPost } = require('./consultas')

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.sendFile(__dirname + "../front/public/index.html")
})

app.listen(port, console.log("Servidor Conectado"))


app.get('/posts', async (req, res) => {
    const posts = await getPosts();
    res.json(posts);
 });
    
app.post('/posts', async (req, res) => {
    const { titulo, url, descripcion } = req.body;
    const img = url;
    await agregarPost(titulo, img, descripcion);
    res.json(req.body)
    });