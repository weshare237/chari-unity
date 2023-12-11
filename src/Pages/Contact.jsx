import BreadCrumb from '../Components/BreadCrumb'

const Contact = () => {
  return (
    <>
      {/* <!-- Page Header Start --> */}
      <BreadCrumb title='Contactez-nous' />
      {/* <!-- Page Header End --> */}

      {/* <!-- Contact Start --> */}
      <div className='container-xxl py-5'>
        <div className='container'>
          <div className='row g-5'>
            <div className='col-lg-6 wow fadeIn' data-wow-delay='0.1s'>
              <div className='d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3'>
                Contactez-nous
              </div>
              <h1 className='display-6 mb-5'>
                Si vous avez des questions, n'hésitez pas à nous contacter.
              </h1>
              <p className='mb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Commodi, natus cumque omnis odit, accusamus facere voluptatem
                est deserunt dicta culpa autem delectus assumenda! Cumque
                aperiam beatae esse deserunt, sed maxime.
              </p>
              <form>
                <div className='row g-3'>
                  <div className='col-md-6'>
                    <div className='form-floating'>
                      <input
                        type='text'
                        className='form-control'
                        id='name'
                        placeholder='Votre nom'
                      />
                      <label htmlFor='name'>Votre nom</label>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-floating'>
                      <input
                        type='email'
                        className='form-control'
                        id='email'
                        placeholder='Votre courriel'
                      />
                      <label htmlFor='email'>Votre courriel</label>
                    </div>
                  </div>
                  <div className='col-12'>
                    <div className='form-floating'>
                      <input
                        type='text'
                        className='form-control'
                        id='subject'
                        placeholder='Subject'
                      />
                      <label htmlFor='subject'>Sujet</label>
                    </div>
                  </div>
                  <div className='col-12'>
                    <div className='form-floating'>
                      <textarea
                        className='form-control'
                        placeholder='Leave a message here'
                        id='message'
                        style={{ height: '100px' }}
                      ></textarea>
                      <label htmlFor='message'>Message</label>
                    </div>
                  </div>
                  <div className='col-12'>
                    <button className='btn btn-primary py-2 px-3 me-3'>
                      Envoyer le message
                      <div className='d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2'>
                        <i className='fa fa-arrow-right'></i>
                      </div>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div
              className='col-lg-6 wow fadeIn'
              data-wow-delay='0.5s'
              style={{ minHeight: '450px' }}
            >
              <div className='position-relative rounded overflow-hidden h-100'>
                <iframe
                  className='position-relative w-100 h-100'
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd'
                  frameborder='0'
                  style={{ minHeight: '450px', border: 0 }}
                  allowfullscreen=''
                  aria-hidden='false'
                  tabindex='0'
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Contact End --> */}
    </>
  )
}
export default Contact
