import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div
      className='container-fluid fixed-top px-0 wow fadeIn'
      data-wow-delay='0.1s'
    >
      <div className='top-bar text-white-50 row gx-0 align-items-center d-none d-lg-flex'>
        <div className='col-lg-6 px-5 text-start'>
          <small>
            <i className='fa fa-map-marker-alt me-2'></i>Dschang, Cameroon
          </small>
          <small className='ms-4'>
            <i className='fa fa-envelope me-2'></i>info@example.com
          </small>
        </div>
        <div className='col-lg-6 px-5 text-end'>
          <small>Suivez-nous :</small>
          <a className='text-white-50 ms-3' href=''>
            <i className='fab fa-facebook-f'></i>
          </a>
          <a className='text-white-50 ms-3' href=''>
            <i className='fab fa-twitter'></i>
          </a>
          <a className='text-white-50 ms-3' href=''>
            <i className='fab fa-linkedin-in'></i>
          </a>
          <a className='text-white-50 ms-3' href=''>
            <i className='fab fa-instagram'></i>
          </a>
        </div>
      </div>

      <nav
        className='navbar navbar-expand-lg navbar-dark py-lg-0 px-lg-5 wow fadeIn'
        data-wow-delay='0.1s'
      >
        <Link to='/' className='navbar-brand ms-4 ms-lg-0'>
          <h1 className='fw-bold text-primary m-0'>
            Chari<span className='text-white'>Unity</span>
          </h1>
        </Link>
        <button
          type='button'
          className='navbar-toggler me-4'
          data-bs-toggle='collapse'
          data-bs-target='#navbarCollapse'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarCollapse'>
          <div className='navbar-nav ms-auto p-4 p-lg-0'>
            <Link to='/' className='nav-item nav-link active'>
              Accueil
            </Link>
            <Link to='/about' className='nav-item nav-link'>
              A propos de nous
            </Link>
            <Link to='/causes' className='nav-item nav-link'>
              Causes
            </Link>
            <div className='nav-item dropdown'>
              <a
                href='#'
                className='nav-link dropdown-toggle'
                data-bs-toggle='dropdown'
              >
                Pages
              </a>
              <div className='dropdown-menu m-0'>
                <Link to='/services' className='dropdown-item'>
                  Nos services
                </Link>
                <Link to='/donate' className='dropdown-item'>
                  Faire un don
                </Link>
                {/* <Link to='/team' className='dropdown-item'>
                  Notre équipe
                </Link> */}
                {/* <Link to='/testimonials' className='dropdown-item'>
                  Témoignages
                </Link> */}
              </div>
            </div>
            <Link to='/contact' className='nav-item nav-link'>
              Contactez-nous
            </Link>
          </div>
          <div className='d-none d-lg-flex ms-2'>
            <Link to='/donate' className='btn btn-outline-primary py-2 px-3'>
              Faire un don maintenant
              <div className='d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2'>
                <i className='fa fa-arrow-right'></i>
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Navbar
