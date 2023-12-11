const Footer = () => {
  return (
    <div
      className='container-fluid bg-dark text-white-50 footer mt-5 pt-5 wow fadeIn'
      data-wow-delay='0.1s'
    >
      <div className='container py-5'>
        <div className='row g-5'>
          <div className='col-lg-3 col-md-6'>
            <h1 className='fw-bold text-primary mb-4'>
              Chari<span className='text-white'>Unity</span>
            </h1>
            <p>
              Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat
              ipsum et lorem et sit, sed stet lorem sit clita
            </p>
            <div className='d-flex pt-2'>
              <a className='btn btn-square me-1' href=''>
                <i className='fab fa-twitter'></i>
              </a>
              <a className='btn btn-square me-1' href=''>
                <i className='fab fa-facebook-f'></i>
              </a>
              <a className='btn btn-square me-1' href=''>
                <i className='fab fa-youtube'></i>
              </a>
              <a className='btn btn-square me-0' href=''>
                <i className='fab fa-linkedin-in'></i>
              </a>
            </div>
          </div>
          <div className='col-lg-3 col-md-6'>
            <h5 className='text-light mb-4'>Adresse</h5>
            <p>
              <i className='fa fa-map-marker-alt me-3'></i>Dschang, Cameroon
            </p>
            <p>
              <i className='fa fa-phone-alt me-3'></i>+237 655 678 900
            </p>
            <p>
              <i className='fa fa-envelope me-3'></i>info@example.com
            </p>
          </div>
          <div className='col-lg-3 col-md-6'>
            <h5 className='text-light mb-4'>Liens rapides</h5>
            <a className='btn btn-link' href=''>
              À propos de nous
            </a>
            <a className='btn btn-link' href=''>
              Contactez-nous
            </a>
            <a className='btn btn-link' href=''>
              Nos services
            </a>
            <a className='btn btn-link' href=''>
              Conditions générales
            </a>
            <a className='btn btn-link' href=''>
              Soutien
            </a>
          </div>
          <div className='col-lg-3 col-md-6'>
            <h5 className='text-light mb-4'>Newsletter</h5>
            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <div
              className='position-relative mx-auto'
              style={{ maxWidth: '400px' }}
            >
              <input
                className='form-control bg-transparent w-100 py-3 ps-4 pe-5'
                type='text'
                placeholder='Votre courriel'
              />
              <button
                type='button'
                className='btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2'
              >
                S'inscrire
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid copyright'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 text-center text-md-start mb-3 mb-md-0'>
              &copy; <a href='#'>ChariUnity</a>, Tous droits réservés.
            </div>
            <div className='col-md-6 text-center text-md-end'>
              Conçu par <a href='#'>I-TECH CENTER</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer
