import firstService from '../assets/img/mission.jpg'
import secondService from '../assets/img/icon-1.png'

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
            En savoir plus sur ce que nous faisons et s'impliquer
          </h1>
        </div>
        <div className='row g-4 justify-content-center'>
          <div className='col-lg-6 col-md-6 wow fadeInUp' data-wow-delay='0.1s'>
            <div className='service-item bg-white text-center h-100 '>
              <img className='img-fluid' src={firstService} alt='' />
            </div>
          </div>
          <div className='col-lg-6 col-md-6 wow fadeInUp' data-wow-delay='0.3s'>
            <div className='service-item bg-white text-center h-100 p-4 p-xl-5'>
              <img className='img-fluid mb-4' src={secondService} alt='' />

              <p className='mb-4'>
                👉🏾 Contribuer à réduire la stigmatisation, le rejet et le manque
                de confiance en soi (formation, emploi, soins, dons, un geste…){' '}
                <br /> <br />
                👉🏾 Sensibiliser le grand public à l’importance de fournir une
                assistance aux personnes démunies qui souffrent dans le monde.{' '}
                <br />
                <br />
                👉🏾 Faciliter l'accès à des informations utiles pour les familles
                dans le besoin et encourager le soutien par le biais
                d'événements variés.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ServicesSection
