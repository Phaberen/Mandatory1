import express from "express";
import { readPage, constructPage } from "./util/templatingEngine.js";

const app = express();

const frontpage = constructPage(
  readPage("./public/pages/frontpage.html"),
  {
    tabTitle: "Home",
  },
);

const toolspage = constructPage(
  readPage("./public/pages/tools.html"),
  {
    tabTitle: "Tools",
  },
);

const expresspage = constructPage(
  readPage("./public/pages/express.html"),
  {
    tabTitle: "Express",
  },
);

const modulespage = constructPage(
  readPage("./public/pages/modules.html"),
  {
    tabTitle: "Modules",
  },
);

const fetchpage = constructPage(
  readPage("./public/pages/fetch.html"),
  {
    tabTitle: "Fetch",
  },
);

const javascriptpage = constructPage(
  readPage("./public/pages/javascript.html"),
  {
    tabTitle: "Javascript",
  },
);

//expose only what is inside 'public'
app.use(express.static("public"));

app.get("/", (req, res) => {
  console.log("fontpage was accessed by a user");
  res.send(frontpage);
});

app.get("/tools", (req, res) => {
  console.log("toolspage was accessed by a user");
  res.send(toolspage);
});

app.get("/express", (req, res) => {
  res.send(expresspage);
});

app.get("/modules", (req, res) => {
  res.send(modulespage);
});

app.get("/fetch", (req, res) => {
  res.send(fetchpage);
});

app.get("/Javascript", (req, res) => {
  res.send(javascriptpage);
});

// uses environment variable PORT if set, else 8080
const PORT = process.env.PORT ?? 8080;

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
