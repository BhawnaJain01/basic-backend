const express = require("express")
const app = express()
const PORT = process.env.PORT || 3010 ;
const cors =  require('cors')
const apiRoutes = require("./Routes/apiRoutes") 
app.use(cors())

app.use(express.json());

app.use("/" , apiRoutes)

app.use(express.urlencoded({extended : false})) ; 


app.listen(PORT , ()=>{
    console.log(`listening on ${PORT}`);
})
