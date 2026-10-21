import express from "express";
import { readPage, constructPage } from "./util/templatingEngine.js";

const app = express();

const frontpage = constructPage(readPage("./public/pages/frontpage.html"), {
  tabTitle: "Home",
});

const toolsPage = constructPage(readPage("./public/pages/tools.html"), {
  tabTitle: "Tools",
});

const expressPage = constructPage(readPage("./public/pages/express.html"), {
  tabTitle: "Express",
});

const modulesPage = constructPage(readPage("./public/pages/modules.html"), {
  tabTitle: "Modules",
});

const fetchPage = constructPage(readPage("./public/pages/fetch.html"), {
  tabTitle: "Fetch",
});

const javascriptPage = constructPage(readPage("./public/pages/javascript.html"), {
  tabTitle: "Javascript",
});

//expose only what is inside 'public'
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(frontpage);
});

app.get("/tools", (req, res) => {
  res.send(toolsPage);
});

app.get("/express", (req, res) => {
  res.send(expressPage);
});

app.get("/modules", (req, res) => {
  res.send(modulesPage);
});

app.get("/fetch", (req, res) => {
  res.send(fetchPage);
});

app.get("/javascript", (req, res) => {
  res.send(javascriptPage);
});

// uses environment variable PORT if set, else 8080
const PORT = process.env.PORT ?? 8080;

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
