import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'
import HomePage from '../../route/HomePage'
import Cart from '../../route/Cart'
import Admin from '../../route/Admin'
import ProductManager from '../../route/ProductManager'
import CategoryManger from '../../route/CategoryManager'
import AttributeSetManager from '../../route/AttributeSetManager'
import AttributeManager from '../../route/AttributeManager/AttributeManager.component'

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
                <Route path="/admin" exact>
                    <Admin />
                </Route>
                <Route path="/admin/category-manager" exact>
                    <CategoryManger />
                </Route>
                <Route path="/admin/product-manager" exact>
                    <ProductManager />
                </Route>
                <Route path="/admin/attribute-set-manager" exact>
                    <AttributeSetManager />
                </Route>
                <Route path="/admin/attribute-manager" exact>
                    <AttributeManager />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router
