import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './Components/User_Side/Home';
import Login from './Components/User_Side/Login';
import Register from './Components/User_Side/Register';
import ProductDescription from './Components/User_Side/ProductDescription';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import {books_full_list} from './Components/User_Side/Book_List';
// import Sidebar from './Components/SideBar/SideBar';
// import FloatingButton from './Components/FloatingButton';
import AdminLogin from './Components/User_Side/AdminLogin';
import Admin from './Components/Admin_Side/Admin';
const books_list = books_full_list.books_list;
const genre_list = books_full_list.genres;

function VReadersClubApp() {

  // const [books, setBooks] = useState([]);

  // console.log(books);

  // useEffect(() => {
  //   fetch("http://localhost:8080/books/getAll")
  //   .then(res => res.json())
  //   .then((result) => {
  //     setBooks(result);
  //   })
  // }, []);

  return (
    // BEM
    <Router>
      <div className="App">
      {/* <FloatingButton /> */}
        
        <Switch>

          <Route path="/login">
            <Login />
          </Route>
          <Route path="/admin_login">
            <AdminLogin />
          </Route>
          <Route path="/register">
            <Register />
          </Route>

          <Route path="/product_description">
            <ProductDescription />
          </Route>

          {/* Admin */}
          <Route path="/admin">
            <Admin />
          </Route>

          {/* !!! Default Route at bottom !!! */}
          <Route path="/">
            <Home books={books_list}/>
          </Route>

        </Switch>

        {/* <Redirect to="/" /> */}

      </div>
    </Router>
  );
}

export default VReadersClubApp;