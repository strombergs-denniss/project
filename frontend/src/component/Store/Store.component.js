import { createStore, combineReducers } from 'redux'
import CartReducer from '../../store/Cart/Cart.reducer'

function counterReducer(state = { value: 0 }, action) {
    switch (action.type) {
      case 'counter/incremented':
        return { value: state.value + 1 }
      case 'counter/decremented':
        return { value: state.value - 1 }
      default:
        return state
    }
}

const allReducers = combineReducers({
    counter: counterReducer,
    cart: CartReducer
})

export default createStore(allReducers)
