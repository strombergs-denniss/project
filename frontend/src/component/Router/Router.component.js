import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'
import HomePage from '../../route/HomePage/HomePage.component'
import Cart from '../../route/Cart/Cart.component'

export function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <HomePage />
                </Route>
                <Route path="/cart" exact>
                    <Cart />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router
