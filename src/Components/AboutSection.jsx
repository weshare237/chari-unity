import firstAbout from '../assets/img/about-4.jpg'
import secondAbout from '../assets/img/about-2.jpg'

const AboutSection = () => {
  return (
    <div id='about' className='relative bg-white overflow-hidden mt-16'>
      <div className='max-w-7xl mx-auto'>
        <div className='relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32'>
          <svg
            className='hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2'
            fill='currentColor'
            viewBox='0 0 100 100'
            preserveAspectRatio='none'
            aria-hidden='true'
          >
            <polygon points='50,0 100,0 50,100 0,100'></polygon>
          </svg>

          <div className='pt-1'></div>

          <main className='mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
            <div className='sm:text-center lg:text-left'>
              <div className='d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3'>
                À propos de nous
              </div>
              <h1 className='display-6 mb-5'>
                DONNER DU SOURIRE, C'EST DONNER DE L'ESPOIR.
              </h1>

              <div className='bg-light border-bottom border-5 border-primary rounded p-4 mb-4'>
                <figure className='max-w-screen-md mx-auto text-center'>
                  <svg
                    className='w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 18 14'
                  >
                    <path d='M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z' />
                  </svg>
                  <blockquote>
                    <p className='text-2xl italic font-medium text-gray-900'>
                      "Nous nous adressons à toutes celles qui ont le désir de
                      faire DONNER UN SOURIRE PAR UN GESTE dans leur maison, au
                      travail, à l'école et dans le monde."
                    </p>
                  </blockquote>
                  <figcaption className='flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse'>
                    <div className='flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700'>
                      <cite className='pe-3 font-medium text-gray-900'>
                        Marthe Zambo
                      </cite>
                      <cite className='ps-3 text-sm text-gray-500 dark:text-gray-400'>
                        CEO
                      </cite>
                    </div>
                  </figcaption>
                </figure>
              </div>

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
          </main>
        </div>
      </div>
      <div className='lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
        <img
          className='h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full'
          src={firstAbout}
          alt=''
        />
      </div>
    </div>
  )
}
export default AboutSection
