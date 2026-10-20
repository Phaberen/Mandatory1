import express from "express";
import {readPage, constructPage } from './util/templatingEngine.js'

const app = express();

const frontpage = constructPage(readPage('public/pages/frontpage/frontpage.html'), {
    tabTitle: "Home" });

//expose only what is inside 'public'
app.use(express.static('public'));

app.get('/', (req, res) => {
    console.log("endpoint was accessed by a user")
    res.send(frontpage);
})

// uses environment variable PORT if set, else 8080
const PORT = process.env.PORT ?? 8080;

app.listen(PORT, () => {
    console.log("Server is running on port", PORT)
})
