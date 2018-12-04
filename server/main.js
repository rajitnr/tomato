const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });
const express = require("express");
const cors = require("cors");
const massive = require("massive");

const bodyParser = require("body-parser");
const app = express();

const dc = require("./controller/docs-controller.js");
const uc = require("./controller/user-controller.js");
const ic = require("./controller/item-controller.js");
let { SERVER_PORT } = process.env;

massive(process.env.CONNECTION_STRING).then(dbInstance => {
  app.set("db", dbInstance);
  dbInstance
    .setup()
    .then(response => {
      console.log("Successfully setup the database");
    })
    .catch(error => {
      console.log("Error in DB setup", error);
    });
});

app.use(cors());

app.use(bodyParser.json());

// app.post("/api/users", uc.createFile);
// app.get("/api/users/:user_id", uc.readFile);
// app.put("/api/users/:user_id", uc.updateFile);
// app.delete("/api/users/:user_id", uc.deleteFile);

// app.get("/api/users/:user_id/docs", dc.readFile);
// app.post("/api/users/:user_id/docs", dc.createFile);
// app.delete("/api/users/:user_id/docs/:doc_id", dc.deleteFile);

// app.get("/api/users/:user_id/docs/:doc_id", ic.readFile);
// app.put("/api/users/:user_id/docs/:doc_id", ic.updateFile);

SERVER_PORT = SERVER_PORT || 3005;

app.listen(SERVER_PORT, () => {
  console.log("App is listening in port ", SERVER_PORT);
  //   console.log(path);
});
