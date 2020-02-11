import _ from 'lodash'
import {READ_EVENTS} from '../actions'

//APIからイベント一覧を取得する
export default (events=[], action) => {
  switch (action.type) {
    case READ_EVENTS:
	  return _.mapKeys(action.response.data, 'day')
    default:
	  return events
  }
}


