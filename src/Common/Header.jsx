import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        	{/* <!-- Start of Header section
		============================================= --> */}
		<header>
			<div id="main-menu"  class="main-menu-container">
				<div  class="main-menu">
					<div class="container">
						<div class="navbar-default">
							<div class="navbar-header float-left">
								<Link class="navbar-brand text-uppercase" to="#"><img src="assets/img/logo/logo.png" alt="logo"/></Link>
							</div>
							<div class="cart-search float-right ul-li">
								<ul>
									<li><Link to="#"><i class="fas fa-shopping-bag"></i></Link></li>
									<li>
										<button type="button" class="toggle-overlay search-btn">
											<i class="fas fa-search"></i>
										</button>
										<div class="search-body">
											<div class="search-form">
												<form action="#">
													<input class="search-input" type="search" placeholder="Search Here"/>
													<div class="outer-close toggle-overlay">
														<button type="button" class="search-close">
															<i class="fas fa-times"></i>
														</button>
													</div>
												</form>
											</div>
										</div>
									</li>
								</ul>
							</div>
							<div class="log-in float-right">
								<Link toa-toggle="modal" data-target="#myModal" href="#">log in</Link>
								{/* <!-- The Modal --> */}
								<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-hidden="true">
									<div class="modal-dialog">
										<div class="modal-content">

											{/* <!-- Modal Header --> */}
											<div class="modal-header backgroud-style">
												<div class="gradient-bg"></div>
												<div class="popup-logo">
													<img src="assets/img/logo/p-logo.jpg" alt=""/>
												</div>
												<div class="popup-text text-center">
													<h2> <span>Login</span> Your Account.</h2>
													<p>Login to our website, or <span>REGISTER</span></p>
												</div>
											</div>

											{/* <!-- Modal body --> */}
											<div class="modal-body">
												<div class="facebook-login">
													<Link to="#">
														<div class="log-in-icon">
															<i class="fab fa-facebook-f"></i>
														</div>
														<div class="log-in-text text-center">
															Login with Facebook
														</div>
													</Link>
												</div>
												<div class="alt-text text-center"><Link to="#">OR SIGN IN</Link> </div>
												<form class="contact_form" action="#" method="POST" enctype="multipart/form-data">
													<div class="contact-info">
														<input class="name" name="Email" type="email" placeholder="Your@email.com*"/>
													</div>
													<div class="contact-info">
														<input class="pass" name="name" type="password" placeholder="Your password*"/>
													</div>
													<div class="nws-button text-center white text-capitalize">
														<button type="submit" value="Submit">LOg in Now</button> 
													</div> 
												</form>
												<div class="log-in-footer text-center">
													<p>* Denotes mandatory field.</p>
													<p>** At least one telephone number is required.</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							{/* <!-- Collect the nav links, forms, and other content for toggling --> */}
							<nav class="navbar-menu float-right">
								<div class="nav-menu ul-li">
									<ul>
										<li class="menu-item-has-children ul-li-block">
											<Link to="/">Home</Link>
										</li>
										<li><Link to="/about">About Us</Link></li>
										<li><Link to="/course">Course</Link></li>
										<li><Link to="/contact">Contact Us</Link></li>
										<li class="menu-item-has-children ul-li-block">
											<Link to="/coursedetails">Pages</Link>
											{/* <ul class="sub-menu">
												<li><Link to="teacher.html">Teacher</Link></li>
												<li><Link to="teacher-details.html">Teacher Details</Link></li>
												<li><Link to="blog.html">Blog</Link></li>
												<li><Link to="blog-single.html">Blog Single</Link></li>
												<li><Link to="course.html">Course</Link></li>
												<li><Link to="course-details.html">Course Details</Link></li>
												<li><Link to="faq.html">FAQ</Link></li>
												<li><Link to="check-out.html">Check Out</Link></li>
											</ul> */}
										</li>
									</ul>
								</div>
							</nav>
							<div class="mobile-menu">
								<div class="logo"><Link to="index-1.html"><img src="assets/img/logo/logo.png" alt="Logo"/></Link></div>
								<nav>
									<ul>
										<li><Link to="/">Home</Link>
										</li>
										<li><Link to="/about">About</Link></li>
										<li><Link to="#">Blog</Link>
											<ul>
												<li><Link to="#">Blog</Link></li>
												<li><Link to="#">Blog sinlge</Link></li>
											</ul>
										</li>
										<li><Link to="#">Shop</Link>
										</li>
										<li><Link to="/contact">Contact</Link></li>
										<li><Link to="#">Pages</Link>
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