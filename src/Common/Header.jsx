import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
 
  return (
    <div>
      {/* loader */}
      <div id='preloader'></div>
      {/* <!-- Start of Header section
		============================================= --> */}
      <header>
        <div id='main-menu' class='main-menu-container' style={{height:"71px"}}>
          <div class='main-menu'>
            <div class='container'>
              <div class='navbar-default'>
                <div class='navbar-header float-left'>
                  <Link class='navbar-brand text-uppercase' to='#'>
                    <h2 class='widget-title' style={{ color: '#fff' }}>
                      LOGO
                    </h2>
                  </Link>
                </div>
                {/* <div class='cart-search float-right ul-li'>
                  <ul>
                    <li>
                      <Link to='#'>
                        <i class='fas fa-shopping-bag'></i>
                      </Link>
                    </li>
                    <li>
                      <button type='button' class='toggle-overlay search-btn'>
                        <i class='fas fa-search'></i>
                      </button>
                      <div class='search-body'>
                        <div class='search-form'>
                          <form action='#'>
                            <input
                              class='search-input'
                              type='search'
                              placeholder='Search Here'
                            />
                            <div class='outer-close toggle-overlay'>
                              <button type='button' class='search-close'>
                                <i class='fas fa-times'></i>
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div> */}
                {/* <div class='log-in float-right'>
                  <Link href='/login'>log in</Link>
                </div> */}
                {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
                <nav class='navbar-menu float-right'>
                  <div class='nav-menu ul-li'>
                    <ul>
                      <li class='menu-item-has-children ul-li-block'>
                        <Link to='/'>Home</Link>
                      </li>
                      <li>
                      </li>
                      <li class='menu-item-has-children ul-li-block'>
                        <Link to='/course'>Course</Link>
                        <ul class='sub-menu'>
                        <li>
                            <Link to='/c&c++'>C & C++</Link>
                          </li>
                          <li>
                            <Link to='/js'>JavaScript</Link>
                          </li>
                          <li>
                            <Link to='/python'>Python</Link>
                          </li>
                          <li>
                            <Link to='/java'>Java</Link>
                          </li>
                        </ul>
                      </li>
                      <li class='menu-item-has-children ul-li-block'>
                        <Link >Data Structure</Link>
                        <ul class='sub-menu'>
                          <li>
                            <Link to='/dsa'>Stack</Link>
                          </li>
                          <li>
                            <Link to='/queue'>Queue</Link>
                          </li>
                          <li>
                            <Link to='/sort'>Sorting Algorithms</Link>
                          </li>
                          <li>
                            <Link to='/search'>Searching Algorithms</Link>
                          </li>
                        </ul>
                      </li>
                      <li class='menu-item-has-children ul-li-block'>
                        <Link to='/about'>About Us</Link>
                      </li>
                    </ul>
                  </div>
                </nav>
                <div class='mobile-menu'>
                  <div class='logo'>
                    <Link to='/'>Logo</Link>
                  </div>
                  <nav>
                    <ul>
                      <li>
                        <Link to='/'>Home</Link>
                      </li>
                      <li>
                        <Link to='/about'>About</Link>
                      </li>
                      <li>
                        <Link to='#'>Blog</Link>
                        <ul>
                          <li>
                            <Link to='#'>Blog</Link>
                          </li>
                          <li>
                            <Link to='#'>Blog sinlge</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to='#'>Shop</Link>
                      </li>
                      <li>
                        <Link to='/contact'>Contact</Link>
                      </li>
                      <li>
                        <Link to='#'>Pages</Link>
                        {/* <ul>
												<li><Link to="course.html">Course</Link></li>
												<li><Link to="course-details.html">course sinlge</Link></li>
												<li><Link to="teacher.html">teacher</Link></li>
												<li><Link to="teacher-details.html">teacher details</Link></li>
												<li><Link to="faq.html">FAQ</Link></li>
												<li><Link to="check-out.html">Check Out</Link></li>
											</ul> */}
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- Start of Header section
	============================================= --> */}
    </div>
  )
}

export default Header
