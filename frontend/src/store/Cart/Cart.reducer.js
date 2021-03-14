/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/base-theme
 * @link https://github.com/scandipwa/base-theme
 */

import { UPDATE_TOTALS } from './Cart.action';

export const CART_TOTALS = 'cart_totals';

export const updateCartTotals = (action) => {
    console.log(action)
};

export const getInitialState = () => ({
    cartTotals: {}
});

export const CartReducer = (
    state = getInitialState(),
    action
) => {
    const { type } = action;

    switch (type) {
    case UPDATE_TOTALS:
        return updateCartTotals(action, state);
    default:
        return state;
    }
};

export default CartReducer;
