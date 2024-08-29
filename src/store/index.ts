import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
import { thunk } from 'redux-thunk'

const store = createStore(reducer, compose(applyMiddleware(thunk)))
export default store
