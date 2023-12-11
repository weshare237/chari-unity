import firstAbout from '../assets/img/about-4.jpg'
import secondAbout from '../assets/img/about-2.jpg'

const AboutSection = () => {
  return (
    <div className='container-xxl py-5'>
      <div className='container'>
        <div className='row g-5'>
          <div className='col-lg-6 wow fadeInUp' data-wow-delay='0.1s'>
            <div
              className='position-relative overflow-hidden h-100'
              style={{ minHeight: '400px' }}
            >
              <img
                className='position-absolute w-100 h-100 pt-5 pe-5'
                src={firstAbout}
                alt=''
                style={{ objectFit: 'contain' }}
              />
              <img
                className='position-absolute top-0 end-0 bg-white ps-2 pb-2'
                src={secondAbout}
                alt=''
                style={{ width: '200px', height: '200px' }}
              />
            </div>
          </div>
          <div className='col-lg-6 wow fadeInUp' data-wow-delay='0.5s'>
            <div className='h-100'>
              <div className='d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3'>
                À propos de nous
              </div>
              <h1 className='display-6 mb-5'>
                Nous aidons les personnes en détresse dans le monde entier
              </h1>
              <div className='bg-light border-bottom border-5 border-primary rounded p-4 mb-4'>
                <p className='text-dark mb-2'>
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem sed
                  stet lorem sit clita duo justo erat amet
                </p>
                <span className='text-primary'>Marthe Zambo, Founder</span>
              </div>
              <p className='mb-5'>
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <a className='btn btn-primary py-2 px-3 me-3' href=''>
                En savoir plus
                <div className='d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2'>
                  <i className='fa fa-arrow-right'></i>
                </div>
              </a>
              <a className='btn btn-outline-primary py-2 px-3' href=''>
                Nous contacter
                <div className='d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2'>
                  <i className='fa fa-arrow-right'></i>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AboutSection
