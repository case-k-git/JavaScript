import { combineReducers } from 'redux'
import events from './events'

// index.js：定義したreducerをまとめる
export default combineReducers({ events })
// export default combineReducers({ foo, bar, baz })
