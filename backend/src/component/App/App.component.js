import express from 'express'
import IndexRoute from '../../route/Index.route'
import { createDatabase } from '../../util/Database/Database'
import cors from 'cors'

export function App() {
    const app = express()
    app.use(cors())
    app.use('/', IndexRoute)
    createDatabase(true)

    return app
}

export default App()
