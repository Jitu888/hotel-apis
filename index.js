const server = require('./server');
const PORT = 4100;


server.listen(PORT,()=>{
    console.log("server is up and running on port : " + PORT)
})