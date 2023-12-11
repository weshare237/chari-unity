import { Link } from 'react-router-dom'
import BreadCrumb from '../Components/BreadCrumb'

const ErrorPage = () => {
  return (
    <>
      {/* <!-- Page Header Start --> */}
      <BreadCrumb title='Erreur 404' />
      {/* <!-- Page Header End --> */}

      {/* <!-- 404 Start --> */}
      <div className='container-xxl py-5 wow fadeInUp' data-wow-delay='0.1s'>
        <div className='container text-center'>
          <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <i className='bi bi-exclamation-triangle display-1 text-primary'></i>
              <h1 className='display-1'>404</h1>
              <h1 className='mb-4'>Page non trouvée</h1>
              <p className='mb-4'>
                Nous sommes désolés, la page que vous recherchez n'existe pas
                dans notre site web ! Peut-être devriez-vous vous rendre sur
                notre page d'accueil ou essayer d'effectuer une recherche ?
              </p>
              <Link to='/' className='btn btn-outline-primary py-2 px-3'>
                Retourner à l'accueil
                <div className='d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2'>
                  <i className='fa fa-arrow-right'></i>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- 404 End --> */}
    </>
  )
}
export default ErrorPage
