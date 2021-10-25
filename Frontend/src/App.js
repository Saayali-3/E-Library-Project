// import React, { useEffect, useState } from 'react';
import React, { useRef } from 'react';
// import './App.css';
// import '../src/Components/Login_SignUp/src/app/App.css';
import Home from './Components/User_Side/Home';
//import Login from './Components/User_Side/Login';
//import Register from './Components/User_Side/Register';
import ProductDescription from './Components/User_Side/ProductDescription';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {books_full_list} from './Components/User_Side/Book_List';
// import Sidebar from './Components/SideBar/SideBar';
// import FloatingButton from './Components/FloatingButton';
//import AdminLogin from './Components/User_Side/AdminLogin';
import Admin from './Components/Admin_Side/Admin';
import Testimonial from './Components/User_Side/Testimonial';
import SideBar from './Components/User_Side/SideBar/SideBar';
import RoutesContainer from './Components/Authentication Part/components/routes/RoutesContainer';
import { AdminLoginContainer, AdminSignupContainer, LoginFormContainer,ProfileContainer, NavBarContainer, SignupFormContainer, UserContainer } from './Components/Authentication Part/components/containers';
import { ApproveView, ConfirmAccountView, MembershipView, VerificationView } from './Components/Authentication Part/components/views';
import FloatingButton from './Components/User_Side/FloatingButton';
// import RoutesContainer from './Components/Login_SignUp/src/components/routes/RoutesContainer';
const books_list = books_full_list.books_list;
const genre_list = books_full_list.genres;

function App() {

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
    
        {/* <NavBarContainer /> */}
      
       
        <Switch>

          {/* <Route path="/login">
            <Login />
          </Route>
          <Route path="/admin_login">
            <AdminLogin />
          </Route>
          <Route path="/register">
            <Register />
          </Route> */}

          {/* <Route path="/login">
            <NavBarContainer />
            <RoutesContainer />
          </Route> */}

        <Route exact path="/signup" component={SignupFormContainer} />
        <Route exact path="/login" component={LoginFormContainer} />
        <Route exact path="/verification" component={VerificationView} />
        {/* <Route exact path="/home" component={HomePageView} /> */}
        <Route exact path="/membership" component={MembershipView} />
        <Route exact path="/confirm-account" component={ConfirmAccountView} />
        <Route exact path="/approve" component={ApproveView} />
        <Route exact path="/view_profile" component={ProfileContainer} />
         <Route exact path="/" component={LoginFormContainer} /> 
        <Route exact path="/users/:id" component={UserContainer} />
        <Route exact path="/adminsignup" component={AdminSignupContainer} />
        <Route exact path="/adminlogin" component={AdminLoginContainer} />

          <Route path="/product_description">
            <ProductDescription />
          </Route>

          {/* Admin */}
          <Route path="/admin">
            <Admin />
          </Route>

          <Route path="/home">
            <Home/>
          </Route>

        {/*  <Route path="/">
            <Home/>
          </Route>

           !!! Default Route at bottom !!! */}
          {/* <Route path="/">

            <RoutesContainer />
          </Route> */}

        </Switch>

        {/* <Redirect to="/" /> */}

      </div>
    </Router>
  );
}

export default App;