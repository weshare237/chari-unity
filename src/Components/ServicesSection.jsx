import firstService from '../assets/img/icon-1.png'
import secondService from '../assets/img/icon-2.png'
import thirdService from '../assets/img/icon-3.png'

const ServicesSection = () => {
  return (
    <div className='container-xxl py-5'>
      <div className='container'>
        <div
          className='text-center mx-auto mb-5 wow fadeInUp'
          data-wow-delay='0.1s'
          style={{ maxWidth: '500px' }}
        >
          <div className='d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3'>
            Notre mission
          </div>
          <h1 className='display-6 mb-5'>
            Brève présentation des produits ou services.
          </h1>
        </div>
        <div className='row g-4 justify-content-center'>
          <div className='col-lg-4 col-md-6 wow fadeInUp' data-wow-delay='0.1s'>
            <div className='service-item bg-white text-center h-100 p-4 p-xl-5'>
              <img
                className='img-fluid mx-auto mb-4'
                src={firstService}
                alt=''
              />
              <h4 className='mb-3'>Child Education</h4>
              <p className='mb-4'>
                Offrir la joie et l’espoir aux enfants vivant dans des
                situations difficiles, des handicaps, ainsi qu’à leurs familles.
              </p>
              <a className='btn btn-outline-primary px-3' href=''>
                Learn More
                <div className='d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2'>
                  <i className='fa fa-arrow-right'></i>
                </div>
              </a>
            </div>
          </div>

          <div className='col-lg-4 col-md-6 wow fadeInUp' data-wow-delay='0.3s'>
            <div className='service-item bg-white text-center h-100 p-4 p-xl-5'>
              <img
                className='img-fluid mx-auto mb-4'
                src={secondService}
                alt=''
              />
              <h4 className='mb-3'>Medical Treatment</h4>
              <p className='mb-4'>
                Offrir les soins et la scolarité aux enfants malades démunis.
              </p>
              <a className='btn btn-outline-primary px-3' href=''>
                Learn More
                <div className='d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2'>
                  <i className='fa fa-arrow-right'></i>
                </div>
              </a>
            </div>
          </div>

          <div className='col-lg-4 col-md-6 wow fadeInUp' data-wow-delay='0.5s'>
            <div className='service-item bg-white text-center h-100 p-4 p-xl-5'>
              <img
                className='img-fluid mx-auto mb-4'
                src={thirdService}
                alt=''
              />
              <h4 className='mb-3'>Pure Drinking Water</h4>
              <p className='mb-4'>
                Autonomiser les parents et les enfants en situation.
              </p>
              <a className='btn btn-outline-primary px-3' href=''>
                Learn More
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
export default ServicesSection
