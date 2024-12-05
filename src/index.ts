import express from "express"
const server = express();
server.use('/static',express.static('public'));

server.listen(3000,()=>{
  console.log("server working on port ",3000);
});
