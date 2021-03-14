import express from 'express'
import GraphQlRoute from './GraphQl.route'

export const IndexRoute = express.Router()
IndexRoute.post('/graphql', GraphQlRoute)

export default IndexRoute
