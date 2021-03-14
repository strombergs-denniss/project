export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';
export const UPDATE_TOTALS = 'UPDATE_TOTALS';
export const APPLY_COUPON_TO_CART = 'APPLY_COUPON_TO_CART';
export const REMOVE_COUPON_FROM_CART = 'REMOVE_COUPON_FROM_CART';

export const addProductToCart = (product) => ({
    type: ADD_PRODUCT_TO_CART,
    product
});

export const removeProductFromCart = (product) => ({
    type: REMOVE_PRODUCT_FROM_CART,
    product
});

export const updateTotals = (cartData) => ({
    type: UPDATE_TOTALS,
    cartData
});


export const applyCouponToCart = (couponCode) => ({
    type: APPLY_COUPON_TO_CART,
    couponCode
});

export const removeCouponFromCart = () => ({
    type: REMOVE_COUPON_FROM_CART
});
