import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import BookService from '../Services/BookService';


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(id, author, coverpic, edition, isEbook,price,publishDate, title,totalNumber) {
  return { id, author, coverpic, edition, isEbook,price,publishDate, title,totalNumber };
}

 let book = [
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});



export default function CustomizedTables() {
  const classes = useStyles();

    
    const [books, setBooks] = useState([]);

    useEffect(() => {
        getBooks()
    }, [])
    const getBooks = () =>{
        BookService.getUrl().then((response)=>{
            setBooks(response.data)
            console.log(response.data)
        })
    }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell align="right">Auther</StyledTableCell>
            <StyledTableCell align="right">Coverpic</StyledTableCell>
            <StyledTableCell align="right">Edition</StyledTableCell>
            <StyledTableCell align="right">Is Book</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Publish Date</StyledTableCell>
            <StyledTableCell align="right">Title</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
          books.map((row) => (
              <StyledTableRow key={row.title}>
              <StyledTableCell component="th" scope="row">
                {row.title}
              </StyledTableCell>
              <StyledTableCell align="right">{row.author}</StyledTableCell>
              <StyledTableCell align="right">{row.coverpic}</StyledTableCell>
              <StyledTableCell align="right">{row.edition}</StyledTableCell>
              <StyledTableCell align="right">{row.isEbook}</StyledTableCell>
              <StyledTableCell align="right">{row.price}</StyledTableCell>
              <StyledTableCell align="right">{row.publishDate}</StyledTableCell>
              <StyledTableCell align="right">{row.title}</StyledTableCell>
            </StyledTableRow>
            
          ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}
