import axios from 'axios'
export const READ_EVENTS = 'READ_EVENTS'
const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'
// const TEST_SERVER = 'http://localhost:5000/api/getList'
export const readEvents = () => async dispatch => {
	const response1 = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
	//console.log(response1);
	// const response_tst = await axios.get(`${TEST_SERVER}`)
	const response = await axios.get('/events/EventsDataList')
    console.log(response);
	dispatch({ type: READ_EVENTS, response })
}
