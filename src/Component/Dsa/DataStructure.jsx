import React from 'react'
import { Link } from 'react-router-dom'

const DataStructure = () => {

  const courseSyllabus = [
    {
      topic: 'Introduction of Data Structures',
      images:
        'https://media.geeksforgeeks.org/wp-content/uploads/20220520182504/ClassificationofDataStructure-660x347.jpg',
      description:
        ' In computer science, a data structure is a way of organizing and storing data in a computer program so that it can be accessed and used efficiently. Data structures provide a means of managing large amounts of data, enabling efficient searching, sorting, insertion, and deletion of data Data structures can be categorized into two types: primitive data structures and non-primitive data structures. Primitive data structures are the most basic data structures available in a programming language, such as integers, floating-point numbers, characters, and booleans. Non-primitive data structures are complex data structures that are built using primitive data types, such as arrays, linked lists, stacks, queues, trees, graphs, and hash tables The choice of data structure for a particular task depends on the type and amount of data to be processed, the operations that need to be performed on the data, and the efficiency requirements of the program. Efficient use of data structures can greatly improve the performance of a program, making it faster and more memory-efficient. A data structure is a particular way of organizing data in a computer so that it can be used effectively. The idea is to reduce the space and time complexities of different tasks.',
      price: 799,
      duration: "30 Days",
      video: "8 Hours",
      language: "English",
      lectures: "20 Lectures"
    }
  ]
  https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221213113312/Queue-Data-Structures.png
  return (
    <div>
      {/* <!-- Start of breadcrumb section
		============================================= --> */}
      <section
        id='breadcrumb'
        class='breadcrumb-section relative-position backgroud-style'
      >
        <div class='blakish-overlay'></div>
        <div class='container'>
          <div class='page-breadcrumb-content text-center'>
            <div class='page-breadcrumb-title'>
              <h2 class='breadcrumb-head black bold'>
                Data Structure <span> Details.</span>
              </h2>
            </div>
            <div class='page-breadcrumb-item ul-li'>
              <ul class='breadcrumb text-uppercase black'>
                <li class='breadcrumb-item'>
                  <Link to='/'>Home</Link>
                </li>
                <li class='breadcrumb-item active'>Details</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End of breadcrumb section
		============================================= --> */}

      {/* <!-- Start of course details section
		============================================= --> */}
      <section id='course-details' class='course-details-section'>
        <div class='container'>
          <div class='row'>
            <div class='col-md-9'>
              <div class='course-details-item'>
                <div class='course-single-pic mb30'>
                  <img src={courseSyllabus[0].images} alt='' />
                </div>
                <div class='course-single-text'>
                  <div class='course-title mt10 headline relative-position'>
                    <h3>
                      <Link to='#'>
                        <b>{courseSyllabus[0].topic}</b>
                      </Link>{' '}

                    </h3>
                  </div>
                  <div class='course-details-content'>
                    <p style={{ textAlign: "justify" }}>{courseSyllabus[0].description}</p>
                  </div>

                  <div class='course-details-category ul-li'>
                    <span>
                      Course <b>Section:</b>
                    </span>
                    <ul>
                      <li>
                        <Link to='#'>SEction 1 </Link>
                      </li>
                      <li>
                        <Link to='#'>SEction 2 </Link>
                      </li>
                      <li>
                        <Link to='#'>SEction 3 </Link>
                      </li>
                      <li>
                        <Link to='#'>SEction 4 </Link>
                      </li>
                      <li>
                        <Link to='#'>SEction 5 </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <!-- /course-details --> */}

              {/* <!-- /market guide --> */}

              <div class='course-review'>
                <div class='section-title-2 mb20 headline text-left'>
                  <h2>
                    Course <span>Reviews:</span>
                  </h2>
                </div>
                <div class='row'>
                  <div class='col-md-6'>
                    <div class='ratting-preview'>
                      <div class='row'>
                        <div class='col-md-4'>
                          <div class='avrg-rating ul-li'>
                            <b>Average Rating</b>
                            <span class='avrg-rate'>5.0</span>
                            <ul>
                              <li>
                                <i class='fas fa-star'></i>
                              </li>
                              <li>
                                <i class='fas fa-star'></i>
                              </li>
                              <li>
                                <i class='fas fa-star'></i>
                              </li>
                              <li>
                                <i class='fas fa-star'></i>
                              </li>
                              <li>
                                <i class='fas fa-star'></i>
                              </li>
                            </ul>
                            <b>1.225 Ratings</b>
                          </div>
                        </div>
                        <div class='col-md-8'>
                          <div class='avrg-rating ul-li'>
                            <span>Details</span>
                            <div class='rating-overview'>
                              <span class='start-item'>5 Starts</span>
                              <span class='start-bar'></span>
                              <span class='start-count'>1.225</span>
                            </div>
                            <div class='rating-overview'>
                              <span class='start-item'>4 Starts</span>
                              <span class='start-bar'></span>
                              <span class='start-count'>0</span>
                            </div>
                            <div class='rating-overview'>
                              <span class='start-item'>3 Starts</span>
                              <span class='start-bar'></span>
                              <span class='start-count'>0</span>
                            </div>
                            <div class='rating-overview'>
                              <span class='start-item'>2 Starts</span>
                              <span class='start-bar'></span>
                              <span class='start-count'>0</span>
                            </div>
                            <div class='rating-overview'>
                              <span class='start-item'>1 Starts</span>
                              <span class='start-bar'></span>
                              <span class='start-count'>0</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- /review overview --> */}

              <div class='couse-comment'>
                <div class='blog-comment-area ul-li about-teacher-2'>
                  <ul class='comment-list'>
                    <li>
                      <div class=' comment-avater'>
                        <img src='assets/img/blog/ath-2.jpg' alt='' />
                      </div>

                      <div class='author-name-rate'>
                        <div class='author-name float-left'>
                          BY: <span>FRANK LAMPARD</span>
                        </div>
                        <div class='comment-ratting float-right ul-li'>
                          <ul>
                            <li>
                              <i class='fas fa-star'></i>
                            </li>
                            <li>
                              <i class='fas fa-star'></i>
                            </li>
                            <li>
                              <i class='fas fa-star'></i>
                            </li>
                            <li>
                              <i class='fas fa-star'></i>
                            </li>
                            <li>
                              <i class='fas fa-star'></i>
                            </li>
                          </ul>
                        </div>
                        <div class='time-comment float-right'>3 Days ago</div>
                      </div>
                      <div class='author-designation-comment'>
                        <h3>Great Course!! Recommended for Everyone</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod tincidunt ut
                          laoreet dolore magna aliquam erat volutpat. Ut wisi
                          enim ad minim veniam, quis nostrud exerci tation.
                        </p>
                      </div>
                    </li>

                    <li>
                      <div class=' comment-avater'>
                        <img src='assets/img/blog/ath.jpg' alt='' />
                      </div>

                      <div class='author-name-rate'>
                        <div class='author-name float-left'>
                          BY: <span>FRANK LAMPARD</span>
                        </div>
                        <div class='comment-ratting float-right ul-li'>
                          <ul>
                            <li>
                              <i class='fas fa-star'></i>
                            </li>
                            <li>
                              <i class='fas fa-star'></i>
                            </li>
                            <li>
                              <i class='fas fa-star'></i>
                            </li>
                            <li>
                              <i class='fas fa-star'></i>
                            </li>
                            <li>
                              <i class='fas fa-star'></i>
                            </li>
                          </ul>
                        </div>
                        <div class='time-comment float-right'>3 Days ago</div>
                      </div>
                      <div class='author-designation-comment'>
                        <h3>Great Course!! Recommended for Everyone</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod tincidunt ut
                          laoreet dolore magna aliquam erat volutpat. Ut wisi
                          enim ad minim veniam, quis nostrud exerci tation.
                        </p>
                      </div>
                    </li>
                  </ul>

                  <div class='reply-comment-box'>
                    <div class='review-option'>
                      <div class='section-title-2  headline text-left float-left'>
                        <h2>
                          Add <span>Reviews.</span>
                        </h2>
                      </div>
                      <div class='review-stars-item float-right mt15'>
                        <span>Your Rating: </span>
                        <form class='rating'>
                          <label>
                            <input type='radio' name='stars' value='1' />
                            <span class='icon'>
                              <i class='fas fa-star'></i>
                            </span>
                          </label>
                          <label>
                            <input type='radio' name='stars' value='2' />
                            <span class='icon'>
                              <i class='fas fa-star'></i>
                            </span>
                            <span class='icon'>
                              <i class='fas fa-star'></i>
                            </span>
                          </label>
                          <label>
                            <input type='radio' name='stars' value='3' />
                            <span class='icon'>
                              <i class='fas fa-star'></i>
                            </span>
                            <span class='icon'>
                              <i class='fas fa-star'></i>
                            </span>
                            <span class='icon'>
                              <i class='fas fa-star'></i>
                            </span>
                          </label>
                          <label>
                            <input type='radio' name='stars' value='4' />
                            <span class='icon'>
                              <i class='fas fa-star'></i>
                            </span>
                            <span class='icon'>
                              <i class='fas fa-star'></i>
                            </span>
                            <span class='icon'>
                              <i class='fas fa-star'></i>
                            </span>
                            <span class='icon'>
                              <i class='fas fa-star'></i>
                            </span>
                          </label>
                          <label>
                            <input type='radio' name='stars' value='5' />
                            <span class='icon'>
                              <i class='fas fa-star'></i>
                            </span>
                            <span class='icon'>
                              <i class='fas fa-star'></i>
                            </span>
                            <span class='icon'>
                              <i class='fas fa-star'></i>
                            </span>
                            <span class='icon'>
                              <i class='fas fa-star'></i>
                            </span>
                            <span class='icon'>
                              <i class='fas fa-star'></i>
                            </span>
                          </label>
                        </form>
                      </div>
                    </div>
                    <div class='teacher-faq-form'>
                      <form
                        method='POST'
                        action='https://jthemes.net/no-form'
                        data-lead='Residential'
                      >
                        <div class='row'>
                          <div class='col-md-6'>
                            <label for='name'>Your Name</label>
                            <input
                              type='text'
                              name='name'
                              id='name'
                              required='required'
                            />
                          </div>
                          <div class='col-md-6'>
                            <label for='phone'>Email Address</label>
                            <input
                              type='tel'
                              name='phone'
                              id='phone'
                              required='required'
                            />
                          </div>
                        </div>
                        <label for='comments'>Message</label>
                        <textarea
                          name='comments'
                          id='comments'
                          rows='2'
                          cols='20'
                          required='required'
                        ></textarea>
                        <div class='nws-button text-center  gradient-bg text-uppercase'>
                          <button type='submit' value='Submit'>
                            Send Message now
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class='col-md-3'>
              <div class='side-bar'>
                <div class='course-side-bar-widget'>
                  <h3>
                    Price <span>₹{courseSyllabus[0].price}</span>
                  </h3>
                  <div class='genius-btn gradient-bg text-center text-uppercase float-left bold-font'>
                    <Link to='#'>
                      Enroll THis course <i class='fas fa-caret-right'></i>
                    </Link>
                  </div>
                  <div class='like-course'>
                    <Link to='#'>
                      <i class='fas fa-heart'></i>
                    </Link>
                  </div>
                </div>
                {/* <div class='enrolled-student'>
                  <div class='comment-ratting float-left ul-li'>
                    <ul>
                      <li>
                        <i class='fas fa-star'></i>
                      </li>
                      <li>
                        <i class='fas fa-star'></i>
                      </li>
                      <li>
                        <i class='fas fa-star'></i>
                      </li>
                      <li>
                        <i class='fas fa-star'></i>
                      </li>
                      <li>
                        <i class='fas fa-star'></i>
                      </li>
                    </ul>
                  </div>
                  <div class='student-number bold-font'>250 Enrolled</div>
                </div> */}
                <div class='couse-feature ul-li-block'>
                  <ul>
                    <li>
                      Lectures <span>{courseSyllabus[0].lectures}</span>
                    </li>
                    <li>
                      Language <span>{courseSyllabus[0].language}</span>
                    </li>
                    <li>
                      Video <span>{courseSyllabus[0].video}</span>
                    </li>
                    <li>
                      Duration <span>{courseSyllabus[0].duration}</span>
                    </li>
                  </ul>
                </div>
                <div class='side-bar-widget'>
                  <h2 class='widget-title text-capitalize'>
                    <span>Featured</span> Course.
                  </h2>
                  <div class='featured-course'>
                    <div class='best-course-pic-text relative-position'>
                      <div class='best-course-pic relative-position'>
                        <img src='assets/img/blog/fb-1.jpg' alt='' />
                        <div class='trend-badge-2 text-center text-uppercase'>
                          <i class='fas fa-bolt'></i>
                          <span>Trending</span>
                        </div>
                      </div>
                      <div class='best-course-text'>
                        <div class='course-title mb20 headline relative-position'>
                          <h3>
                            <Link to='/js'>
                              Fully Responsive Web Design &amp; Development.
                            </Link>
                          </h3>
                        </div>
                        <div class='course-meta'>
                          <span class='course-category'>
                            <Link to='#'>Web Design</Link>
                          </span>
                          <span class='course-author'>
                            <Link to='#'>250 Students</Link>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End of course details section
		============================================= -->	 */}
    </div>
  )
}

export default DataStructure
