const port = process.env.PORT
const colors = require("colors")

const app = require('./App/app')




app.listen(port,()=> {
    console.log(colors.red(`procorp members server running`).bold);
})