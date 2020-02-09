import React, {Component} from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'

const LineDrawing = (props) => {
    console.log(props.events);
    let eventList =  _.map(props.events, event => (
        <tr key={event.day}>
        <td>{event.date.value}</td>
        <td>{event.opening_price}</td>
        <td>{event.high_price}</td>
        <td>{event.low_price}</td>
        <td>{event.end_price}</td>
        </tr>
    ))
    
    //eventList = props.events;

    console.log(eventList);
    return (
        <table>
        <thead>
            <tr>
            <th>日付</th>
            <th>始値</th>
            <th>高値</th>
            <th>安値</th>
            <th>終値</th>
            </tr>
        </thead>
        <tbody>
            {eventList}
        </tbody>
        </table>
    )   
}
export default LineDrawing;