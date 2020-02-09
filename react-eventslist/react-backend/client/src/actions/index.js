import axios from 'axios'
export const READ_EVENTS = 'READ_EVENTS'

export const readEvents = () => async dispatch => {
  const response = await axios.get('/events/searchNikkeiStockAverage')
  console.log(response);
  dispatch({ type: READ_EVENTS, response })
}
