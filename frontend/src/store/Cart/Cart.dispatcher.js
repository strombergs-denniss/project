export class CartDispatcher {
    addProductToCart(dispatch) {
        console.log(dispatch)
    }

    removeProductFromCart(dispatch) {
        console.log(dispatch)
    }

    applyCouponToCart(dispatch) {
        console.log(dispatch)
    }

    removeCouponFromCart(dispatch) {
        console.log(dispatch)
    }
}

export default new CartDispatcher()
