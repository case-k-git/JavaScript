import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import _ from 'lodash'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const LineDrawing = (props) => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>日付</TableCell>
            <TableCell align="right">始値</TableCell>
            <TableCell align="right">高値</TableCell>
            <TableCell align="right">安値</TableCell>
            <TableCell align="right">終値</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {_.map(props.events, event => (
            <TableRow key={event.day}>
              <TableCell component="th" scope="row">
                {event.date.value}
              </TableCell>
              <TableCell align="right">{event.opening_price}</TableCell>
              <TableCell align="right">{event.high_price}</TableCell>
              <TableCell align="right">{event.low_price}</TableCell>
              <TableCell align="right">{event.end_price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default LineDrawing