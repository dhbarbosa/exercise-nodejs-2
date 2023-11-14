import db from './src/models/db.js'
import app from './src/server.js'
const PORT = process.env.PORT || 8080

db.testConnection()

app.listen(PORT, (err) => {
    err
        ? console.error(`> err: ${err}`)
        : console.info(`> On http:localhost:${PORT}`)
})
