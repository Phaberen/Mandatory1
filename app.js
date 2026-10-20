import express from "express";
import {readPage, constructPage } from './util/templatingEngine.js'

const app = express();

const frontpage = constructPage(readPage('./public/pages/frontpage/frontpage.html'), {
    tabTitle: "Home" 
});

const toolspage = constructPage(readPage('./public/pages/tools/toolspage.html'), {
    tabTitle: "Tools"
});

//expose only what is inside 'public'
app.use(express.static('public'));

app.get('/', (req, res) => {
console.log("fontpage was accessed by a user")
    res.send(frontpage);
})

app.get('/tools', (req, res) => {
    console.log("toolspage was accessed by a user")
    res.send(toolspage);
})

// uses environment variable PORT if set, else 8080
const PORT = process.env.PORT ?? 8080;

app.listen(PORT, () => {
    console.log("Server is running on port", PORT)
})
