import BreadCrumb from '../Components/BreadCrumb'
import firstCause from '../assets/img/courses-1.jpg'
import secondCause from '../assets/img/courses-2.jpg'
import thirdCause from '../assets/img/courses-3.jpg'

const Causes = () => {
  return (
    <>
      {/* <!-- Page Header Start --> */}
      <BreadCrumb title='Causes' />
      {/* <!-- Page Header End --> */}

      {/* <!-- Causes Start --> */}
      <div className='container-xxl py-5'>
        <div className='container'>
          <div
            className='text-center mx-auto mb-5 wow fadeInUp'
            data-wow-delay='0.1s'
            style={{ maxWidth: '500px' }}
          >
            <div className='d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3'>
              Causes mises en avant
            </div>
            <h1 className='display-6 mb-5'>
              Chaque enfant mérite d'avoir la possibilité d'apprendre
            </h1>
          </div>
          <div className='row g-4 justify-content-center'>
            <div
              className='col-lg-4 col-md-6 wow fadeInUp'
              data-wow-delay='0.1s'
            >
              <div className='causes-item d-flex flex-column bg-white border-top border-5 border-primary rounded-top overflow-hidden h-100'>
                <div className='text-center p-4 pt-0'>
                  <div className='d-inline-block bg-primary text-white rounded-bottom fs-5 pb-1 px-3 mb-4'>
                    <small>Education</small>
                  </div>
                  <h5 className='mb-3'>
                    PROTÉGER LES ENFANTS VULNÉRABLES (SPÉCIAUX)
                  </h5>
                  <p>
                    Investir dans la vie de ces enfants en leur offrant la
                    possibilité de manger des repas équilibrés, d'aller à
                    l'école, de faire des petits métiers, de recevoir des
                    conseils sur le traumatisme, le rejet, le manque de
                    confiance en soi, l'acceptation de leur situation, les
                    maladies neurologiques ou génétiques, aura un impact
                    significatif sur leur vie actuelle et future.
                  </p>
                  <div className='causes-progress bg-light p-3 pt-2'>
                    <div className='d-flex justify-content-between'>
                      <p className='text-dark'>
                        $10,000 <small className='text-body'>Goal</small>
                      </p>
                      <p className='text-dark'>
                        $9,542 <small className='text-body'>Raised</small>
                      </p>
                    </div>
                    <div className='progress'>
                      <div
                        className='progress-bar'
                        role='progressbar'
                        aria-valuenow='90'
                        aria-valuemin='0'
                        aria-valuemax='100'
                      >
                        <span>90%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='position-relative mt-auto'>
                  <img className='img-fluid' src={firstCause} alt='' />
                  <div className='causes-overlay'>
                    <a className='btn btn-outline-primary' href=''>
                      Read More
                      <div className='d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2'>
                        <i className='fa fa-arrow-right'></i>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='col-lg-4 col-md-6 wow fadeInUp'
              data-wow-delay='0.3s'
            >
              <div className='causes-item d-flex flex-column bg-white border-top border-5 border-primary rounded-top overflow-hidden h-100'>
                <div className='text-center p-4 pt-0'>
                  <div className='d-inline-block bg-primary text-white rounded-bottom fs-5 pb-1 px-3 mb-4'>
                    <small>Pure Water</small>
                  </div>
                  <h5 className='mb-3'> CRÉER UN ACCÈS À L'EAU POTABLE</h5>
                  <p>
                    Nos projets d'eau visent à fournir de l'eau propre et une
                    éducation essentielle sur la santé et l'hygiène à des
                    centaines de milliers de personnes dans les pays en
                    développement. Lorsque les familles ont de l'eau propre pour
                    boire, cuisiner et se laver les mains, elles font
                    l'expérience de la bénédiction que seule une bonne santé
                    peut apporter : la capacité de rester à l'école, de
                    travailler et de former une famille.
                  </p>
                  <div className='causes-progress bg-light p-3 pt-2'>
                    <div className='d-flex justify-content-between'>
                      <p className='text-dark'>
                        $10,000 <small className='text-body'>Goal</small>
                      </p>
                      <p className='text-dark'>
                        $9,542 <small className='text-body'>Raised</small>
                      </p>
                    </div>
                    <div className='progress'>
                      <div
                        className='progress-bar'
                        role='progressbar'
                        aria-valuenow='90'
                        aria-valuemin='0'
                        aria-valuemax='100'
                      >
                        <span>90%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='position-relative mt-auto'>
                  <img className='img-fluid' src={secondCause} alt='' />
                  <div className='causes-overlay'>
                    <a className='btn btn-outline-primary' href=''>
                      Read More
                      <div className='d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2'>
                        <i className='fa fa-arrow-right'></i>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='col-lg-4 col-md-6 wow fadeInUp'
              data-wow-delay='0.5s'
            >
              <div className='causes-item d-flex flex-column bg-white border-top border-5 border-primary rounded-top overflow-hidden h-100'>
                <div className='text-center p-4 pt-0'>
                  <div className='d-inline-block bg-primary text-white rounded-bottom fs-5 pb-1 px-3 mb-4'>
                    <small>Healthy Life</small>
                  </div>
                  <h5 className='mb-3'>AIDER LES FAMILLES DÉMUNIES</h5>
                  <p>
                    Que ce soit avec le bétail, les semences, les outils ou la
                    formation, afin de leur permettre d'avoir de quoi subvenir à
                    leurs besoins et à ceux de leur famille. Car un adage dit :
                    <em>
                      "Mieux vaut apprendre à quelqu’un à pêcher que de lui
                      donner du poisson chaque jour."
                    </em>{' '}
                    Quand vous donnez, vous recevez toujours une récompense en
                    retour d’une façon ou d’une autre.
                  </p>
                  <div className='causes-progress bg-light p-3 pt-2'>
                    <div className='d-flex justify-content-between'>
                      <p className='text-dark'>
                        $10,000 <small className='text-body'>Goal</small>
                      </p>
                      <p className='text-dark'>
                        $9,542 <small className='text-body'>Raised</small>
                      </p>
                    </div>
                    <div className='progress'>
                      <div
                        className='progress-bar'
                        role='progressbar'
                        aria-valuenow='90'
                        aria-valuemin='0'
                        aria-valuemax='100'
                      >
                        <span>90%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='position-relative mt-auto'>
                  <img className='img-fluid' src={thirdCause} alt='' />
                  <div className='causes-overlay'>
                    <a className='btn btn-outline-primary' href=''>
                      Read More
                      <div className='d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2'>
                        <i className='fa fa-arrow-right'></i>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Causes End --> */}
    </>
  )
}
export default Causes
