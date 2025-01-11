const express = require('express')
const port = 3000
const app = express()
const Blog = require('./Models/blog');
const connectDB = require('./config/db');
const blog = require('./Models/blog');
const cors = require('cors');
connectDB();
app.get('/', (req, res) => {    
    res.send('Hello World!')
})
app.use(express.json());


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
}) 

app.use(cors());


app.get('/api/blogs', async(req, res) => {
    try {
        const getBlogs = await Blog.find();
        res.status(200).json(getBlogs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

app.post('/api/blogs', async(req, res) => {
    const {title,content} = req.body;  
  
    if(!title||!content){
        return res.status(400).json({error:'All fields are required'});
    }
try {
    const newBlog = await Blog.create({title,content});
    res.status(201).json(newBlog);
} catch (error) {
    res.status(500).json({ message: error.message });
}
})