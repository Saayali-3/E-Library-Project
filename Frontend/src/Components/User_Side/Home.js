import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { useWindowScroll } from "react-use";
import './Home.css';
import HomeI from './Home_Screen.png';
import Product from './Product';
import SideBar from './SideBar/SideBar';
//import FloatingButton from './FloatingButton';
import BookService from '../Admin_Side/Services/BookService';
import Testimonial from './Testimonial';
import { books_full_list } from './Book_List';
import { UserContainer } from '../Authentication Part/components/containers';
import BOOKSLIST from '../Books_Data.json';

import './SideBar/SideBar.css';
// import './Bootstrap.css';
import { Link } from 'react-router-dom';
// import Logo from '../Logo.png';
import Logo from './Logo.png';
// import { books_full_list } from '../Book_List';
// import auth from '../../auth';
import TemporaryDrawer from '../Admin_Side/Components/Sidebar';
// import TemporaryDrawer from '../../Admin_Side/Components/Sidebar';

function Home() {

    // console.log(UserContainer.);

    // Getting books
    const [Allbooks, setBooks] = useState([]);

    useEffect(() => {
        getBooks()
    }, [])

    const getBooks = () =>{
        BookService.getUrl().then((response)=>{
            console.log(response.data);
            setBooks(response.data);
        })
    }

    // const books_list = books_full_list.books_list;
    const genre_list = [];
    // const books = books_full_list.books_list;
    const books = [];
    // const obj = JSON.parse(books);
    // console.log(obj);
    const books_genre = [];

    BOOKSLIST.map((genre_) => {
        if(!(genre_list.includes(genre_.category))){
            genre_list.push(genre_.category);
            // console.log(genre_.category);
        }
    })

    genre_list.map((genre_)=> {
        if(!(books_genre.includes(genre_))){
            books_genre.push(genre_.category);
            const temp_books = BOOKSLIST.filter((book) =>
            {
                if(book.category.includes(genre_))
                    return book
                    // return genre_.category
            })
            // obj["characters"].push({ name: "Ken Rosenberg", location: "Vice City" });
            // console.log(temp_books);
            // books.assign(temp_books);
            // obj[genre_].push
            // console.log(books);
            const push_this = [];
            push_this.push(genre_);
            push_this.push(temp_books);
            // console.log(push_this);
            // books[genre_] = temp_books;
            books.push(push_this);
        }
    })
    

    console.log(books);

    // console.log(Allbooks);

    // Genre
    const genre = useRef(null);
    // Testimonial
    const testimonial = useRef(null);

    const gotoHome = () =>
        window.scrollTo({
            top: 0,
            behavior:"smooth"
        });

  // Hamburger
  const [isActive, setActive] = useState("false");
  
  const hamburgerToggle = () => {
    setActive(!isActive);
  };
  
  //Chat
  const [openSidebar,setOpenSidebar] = useState(false);
  const activateChat = () =>{
    setOpenSidebar(true);
  }

  // Genre Toggle
  const [isGenreActive, setGenreActive] = useState("false");

  const genreToggle = () => {
    setGenreActive(!isGenreActive);
  };

  // Home
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth"});

  // Genre
  const gotoGenre = () =>
    window.scrollTo({
        top: genre.current.offsetTop,
        behavior:"smooth"
    });

  const gototestimonial = () =>
    window.scrollTo({
        top: testimonial.current.offsetTop,
        behavior:"smooth"
    });

    // Search
    const [searchTerm, setSearchTerm] = useState("");


    // const SIDEBAR = React.forwardRef((ref) => <SideBar genreRef={Genre} testimonialRef={testimonial}/>);

    return (
        <div className="home">
            
            {/* <SideBar ref={Genre}/> */}
            {/* {console.log(Allbooks)} */}

            <div onClick={gotoHome}>
        
            </div>


            {/* <SIDEBAR /> */}

            <div className="SideBar">
        <link href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" rel="stylesheet" />
        <div className={isActive ? "sidebar sidebar__close" : "sidebar"}>
          <div className="logo-details">
            {/* <i className='bx bxl-c-plus-plus sidebar__logo' onClick={hamburgerToggle}></i> */}
            <i className='bx bxl-vimeo sidebar__logo' onClick={hamburgerToggle}></i>
            <Link to='/'>
              {/* <span className="logo_name">CodingLab</span> */}
              <img alt="timer" src={Logo} 
                    className="logo_name"
                />
            </Link>
          </div>
          <ul className="sidebar__nav-links">
            
            {/* Search */}
            <li>
              <a>
                {/* <i className='bx bx-grid-alt' ></i> */}
                <i className='bx bx-search-alt'
                  onClick={hamburgerToggle}
                >
                </i>
                {/* <span className="link_name">Dashboard</span> */}
                <div className="navbar__search">
                    <input className="link_name navbar__searchInput" 
                    type="text" placeholder="Type here ..." 
                    onChange={(event) => {
                        setSearchTerm(event.target.value);
                    }}
                    style={{color: "black", fontSize: "15px"}}
                />
                </div>
              </a>
              <ul className="sub-menu blank">
                <li><a className="link_name">Search</a></li>
              </ul>
            </li>

            {/* Home */}
            <li onClick={scrollToTop} >
              <div className="iocn-link">
                <a>
                  {/* <i className='bx bx-collection' ></i> */}
                  <i className='bx bxs-home'></i>
                  <span className="link_name">Home</span>
                </a>
                {/* <i className='bx bxs-chevron-down arrow' ></i> */}
              </div>
              <ul className="sub-menu">
                <li><a className="link_name">Home</a></li>
              </ul>
            </li>

            {/* Genres */}
            <li className={isGenreActive ? "" : "showMenu"}
              onClick={gotoGenre}
            >
              <div className="iocn-link">
                <a>
                  {/* <i className='bx bx-book-alt' ></i> */}
                  <i className='bx bxs-coin-stack'></i>
                  <span className="link_name">Genres</span>
                </a>
                <i className='bx bxs-chevron-down arrow' onClick={genreToggle}></i>
              </div>
              <ul className="sub-menu">
                <li><a className="link_name">Genres</a></li>
                {genre_list.map((item, index) => {
                    return (
                        <li key={index}>
                                <a>{item}</a>
                        </li>
                    )
                })}
              </ul>
            </li>
            
            {/* Membership */}
            <li>
              <Link to="/membership">
                {/* <i className='bx bx-pie-chart-alt-2' ></i> */}
                <i className='bx bxs-planet'></i>
                <span className="link_name">Membership</span>
              </Link>
              <ul className="sub-menu blank">
                <li><a className="link_name">Membership</a></li>
              </ul>
            </li>

            {/* Statistics */}
            {/* <li>
              <a>
                <i className='bx bx-line-chart' ></i>
                <span className="link_name">Statistics</span>
              </a>
              <ul className="sub-menu blank">
                <li><a className="link_name">Statistics</a></li>
              </ul>
            </li> */}

            {/* Donate Books */}
            {/* <li>
              <div className="iocn-link">
                <a>
                  <i className='bx bxs-donate-heart'></i>
                  <span className="link_name">DonateBooks</span>
                </a>
              </div>
              <ul className="sub-menu">
                <li><a className="link_name">DonateBooks</a></li>
              </ul>
            </li> */}
            
            {/* Testimonial */}
            <li
              onClick={gototestimonial}
            >
              <div className="iocn-link">
                <a>
                <i className='bx bxs-book-content'></i>
                  <span className="link_name">Testimonial</span>
                </a>
                {/* <i className='bx bxs-chevron-down arrow' ></i> */}
              </div>
              <ul className="sub-menu">
                <li><a className="link_name">Testimonial</a></li>
              </ul>
            </li>

            {/* Support */}
            <li>
              <a>
                {/* <i className='bx bx-cog' ></i> */}
                <i className='bx bx-support' onClick={activateChat}></i>
                <span className="link_name">Support</span>
              </a>
              <ul className="sub-menu blank">
                <li><a className="link_name">Support</a></li>
              </ul>
            </li>

            {/* Profile */}
            <li>
              <div className="profile-details">
                <div className="profile-content">
                  {/* <img src="https://static.statusqueen.com/dpimages/thumbnail/dp_images_8-1279.jpg" alt="profileImg"/> */}
                  <img src="https://i.pinimg.com/474x/64/5a/97/645a97899b437f047f4f88bee2e7755c.jpg" alt="profileImg"
                    onClick={hamburgerToggle}
                  />
                </div>
                <div className="name-membership">
                  <Link to="/view_profile">
                    <div className="profile_name">Hello Guest - Sign In</div>
                  </Link>
                  <Link to="/membership">
                    <div className="membership">Get Membership...</div>
                  </Link>
                </div>
                <i className='bx bx-log-out' ></i>
              </div>
            </li>
          </ul>
        </div>
        
          
        <TemporaryDrawer 
      state= {openSidebar}
      setState={setOpenSidebar}
      />

      </div>

            {/* Home */}
            <div className="home__container">
                {/* Top scrolling image */}
                {/* <img className="home__image" src="data:image/jpeg;base64,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" /> */}
                {/* <img className="home__image" src="https://wallup.net/wp-content/uploads/2016/03/10/323586-photography-nature-landscape-water-river-mountain-rock-748x468.jpg" /> */}
                <img className="home__image" src={HomeI} />
                

                <div ref={genre}>
                    {
                    books.map((BOOK, pos) => (
                        <div>
                            <div className="home__genre">
                                <h3
                                    className="home__genre__text"
                                >{BOOK[0]}...</h3>
                            </div>
                            <div
                                className="home__row"
                            >
                                {
                                    BOOK[1]
                                    .filter((each_book) => {
                                        if(searchTerm == ""){
                                            return each_book;
                                        }
                                        else if( (each_book.title.toLowerCase().includes(searchTerm.toLowerCase())) || (each_book.author.toLowerCase().includes(searchTerm.toLowerCase())) || (each_book.category.toLowerCase().includes(searchTerm.toLowerCase())) || (each_book.description.toLowerCase().includes(searchTerm.toLowerCase())) || (each_book.title.toLowerCase().includes(searchTerm.toLowerCase())) )
                                        {
                                            return each_book
                                        }
                                    })
                                    .map((card, pos2) => (
                                        <Product
                                        id={card.id}
                                        title={card.title}
                                        author={card.author}
                                        description={card.description}
                                        cover_images={[card.coverpic, card.coverpic1, card.coverpic2]}
                                        images={[card.image1, card.image2]}
                                        // rating={card.rating}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    ))
                    }
                </div>
                <div ref={testimonial}>
                    <Testimonial/>
                </div>
            </div>

        </div>
    )
}

export default Home
