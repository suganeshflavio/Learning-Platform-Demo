import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    const d = new Date();
    const year= d.getFullYear();
  return (
    <div>
        	{/* <!-- Start of footer section
		============================================= --> */}
		<footer>
			<section id="footer-area" class="footer-area-section">
				<div class="container">
					<div class="footer-content pb10">
						<div class="row">
							<div class="col-md-6">
								<div class="footer-widget "  >
									<div class="footer-logo mb35" style={{color:"#000"}}>
									<h2 class="widget-title">LOGO</h2>
									</div>
									<div class="footer-about-text">
										<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente non provident, dolorem at, eligendi ea aliquam, officia rem quidem expedita cumque.</p>
										<p>Lorem ipsum dolor sit amet we take our mission of increasing global access to quality education seriously. </p>
									</div>
								</div>
							</div>
							<div class="col-md-6">
								<div class="footer-widget "  >
									<div class="footer-menu ul-li-block">
										<h2 class="widget-title">Useful Links</h2>
										<ul>
											<li><Link to="#"><i class="fas fa-caret-right"></i>About Us</Link></li>
											<li><Link to="#"><i class="fas fa-caret-right"></i>Graphic Design</Link></li>
											<li><Link to="#"><i class="fas fa-caret-right"></i>Mobile Apps</Link></li>
											<li><Link to="#"><i class="fas fa-caret-right"></i>Responsive Website</Link></li>
											<li><Link to="#"><i class="fas fa-caret-right"></i>Graphic Design</Link></li>
											<li><Link to="#"><i class="fas fa-caret-right"></i>Mobile Apps</Link></li>
										</ul>
									</div>
								</div>
								<div class="footer-menu ul-li-block "  >
									<h2 class="widget-title">Account Info</h2>
									<ul>
										<li><Link to="#"><i class="fas fa-caret-right"></i>Setting Account</Link></li>
										<li><Link to="#"><i class="fas fa-caret-right"></i>Login & Register</Link></li>
										<li><Link to="#"><i class="fas fa-caret-right"></i>Contact Us</Link></li>
										<li><Link to="#"><i class="fas fa-caret-right"></i>Graphic Design</Link></li>
										<li><Link to="#"><i class="fas fa-caret-right"></i>Mobile Apps</Link></li>
										<li><Link to="#"><i class="fas fa-caret-right"></i>Responsive Website</Link></li>
									</ul>
								</div>
							</div>
							{/* <div class="col-md-3">
								<div class="footer-widget "  >
									<h2 class="widget-title">Photo Gallery</h2>
									<div class="photo-list ul-li">
										<ul>
											<li>
												<img src="assets/img/gallery/g-1.jpg" alt=""/>
												<div class="blakish-overlay"></div>
												<div class="pop-up-icon">
													<Link to="assets/img/gallery/g-1.jpg" data-lightbox="roadtrip">
														<i class="fas fa-search"></i>
													</Link>
												</div>
											</li>
											<li>
												<img src="assets/img/gallery/g-2.jpg" alt=""/>
												<div class="blakish-overlay"></div>
												<div class="pop-up-icon">
													<Link to="assets/img/gallery/g-2.jpg" data-lightbox="roadtrip">
														<i class="fas fa-search"></i>
													</Link>
												</div>
											</li>
											<li>
												<img src="assets/img/gallery/g-3.jpg" alt=""/>
												<div class="blakish-overlay"></div>
												<div class="pop-up-icon">
													<Link to="assets/img/gallery/g-3.jpg" data-lightbox="roadtrip">	<i class="fas fa-search"></i></Link>
												</div>
											</li>
											<li>
												<img src="assets/img/gallery/g-4.jpg" alt=""/>
												<div class="blakish-overlay"></div>
												<div class="pop-up-icon">
													<Link to="assets/img/gallery/g-4.jpg" data-lightbox="roadtrip">	<i class="fas fa-search"></i></Link>
												</div>
											</li>
											<li>
												<img src="assets/img/gallery/g-5.jpg" alt=""/>
												<div class="blakish-overlay"></div>
												<div class="pop-up-icon">
													<Link to="assets/img/gallery/g-5.jpg" data-lightbox="roadtrip">	<i class="fas fa-search"></i></Link>
												</div>
											</li>
											<li>
												<img src="assets/img/gallery/g-6.jpg" alt=""/>
												<div class="blakish-overlay"></div>
												<div class="pop-up-icon">
													<Link to="assets/img/gallery/g-6.jpg" data-lightbox="roadtrip">	<i class="fas fa-search"></i></Link>
												</div>

											</li>
										</ul>
									</div>
								</div>
							</div> */}
						</div>
					</div> 
					<div class="footer-social-subscribe mb65">
						<div class="row">
							<div class="col-md-3">
								<div class="footer-social ul-li "  >
									<h2 class="widget-title">Social Network</h2>
									<ul>
										<li><Link to="#"><i class="fab fa-facebook-f"></i></Link></li>
										<li><Link to="#"><i class="fab fa-twitter"></i></Link></li>
										<li><Link to="#"><i class="fab fa-google-plus-g"></i></Link></li>
									</ul>
								</div>
							</div>
							<div class="col-md-9">
								<div class="subscribe-form "  >
									<h2 class="widget-title">Subscribe Newsletter</h2>

									<div class="subs-form relative-position">
										<form action="#" method="post">
											<input class="course" name="course" type="email" placeholder="Email Address."/>
											<div class="nws-button text-center  gradient-bg text-uppercase">
												<button type="submit" value="Submit">Subscribe now</button> 
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="copy-right-menu">
						<div class="row">
							<div class="col-md-6">
								<div class="copy-right-text">
									<p>© {year} - Designed & Developed by Learning Platform. All rights reserved</p>
								</div>
							</div>
							<div class="col-md-6">
								<div class="copy-right-menu-item float-right ul-li">
									<ul>
										<li><Link to="#">License</Link></li>
										<li><Link to="#">Privacy & Policy</Link></li>
										<li><Link to="#">Term Of Service</Link></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</footer>
	{/* <!-- End of footer section
		============================================= --> */}
    </div>
  )
}

export default Footer