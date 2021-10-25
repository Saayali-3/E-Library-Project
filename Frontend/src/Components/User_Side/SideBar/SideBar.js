import React, { useState } from 'react';
import './SideBar.css';
// import './Bootstrap.css';
import { Link } from 'react-router-dom';
import Logo from '../Logo.png';
import { books_full_list } from '../Book_List';
import auth from '../../auth';
import TemporaryDrawer from '../../Admin_Side/Components/Sidebar';

function SideBar(ref) {  

  // console.log(ref.innerRef);
  // console.log(genreOnClick);

  console.log(ref);
  // const user = auth.tell_User();
  // console.log(user.username);

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
        top: ref.genreRef.current.offsetTop,
        behavior:"smooth"
    });

  const gototestimonial = () =>
    window.scrollTo({
        top: ref.testimonialRef.current.offsetTop,
        behavior:"smooth"
    });

    return (
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
                {books_full_list.genres.map((item, index) => {
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
                
                <i className='bx bxs-planet'></i>
                <span className="link_name">Membership</span>
              </Link>
              <ul className="sub-menu blank">
                <li><a className="link_name">Membership</a></li>
              </ul>
            </li> 
            

            {/* Statistics */}
            <li>
              <a>
                <i className='bx bx-line-chart' ></i>
                <span className="link_name">Statistics</span>
              </a>
              <ul className="sub-menu blank">
                <li><a className="link_name">Statistics</a></li>
              </ul>
            </li>

            {/* Donate Books */}
            <li>
              <div className="iocn-link">
                <a>
                  {/* <i className='bx bxs-home'></i> */}
                  <i className='bx bxs-donate-heart'></i>
                  <span className="link_name">DonateBooks</span>
                </a>
                {/* <i className='bx bxs-chevron-down arrow' ></i> */}
              </div>
              <ul className="sub-menu">
                <li><a className="link_name">DonateBooks</a></li>
              </ul>
            </li>
            
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
    )
}

export default SideBar
