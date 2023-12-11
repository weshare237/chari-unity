import { useState } from 'react'
import BreadCrumb from '../Components/BreadCrumb'

const Donate = () => {
  const [checkedRadio, setCheckedRadio] = useState('')

  const handleChange = (e) => {
    setCheckedRadio(e.target.id)
  }

  return (
    <>
      {/* <!-- Page Header Start --> */}
      <BreadCrumb title='Faire un don' />
      {/* <!-- Page Header End --> */}

      {/* <!-- Donate Start --> */}
      <div className='container-fluid py-5'>
        <div className='container'>
          <div className='row g-5 align-items-center'>
            <div className='col-lg-6 wow fadeIn' data-wow-delay='0.1s'>
              <div className='d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3'>
                Donner maintenant
              </div>
              <h1 className='display-6 mb-5'>
                Merci pour les résultats obtenus avec vous
              </h1>
              <p className='mb-0'>
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
            </div>
            <div className='col-lg-6 wow fadeIn' data-wow-delay='0.5s'>
              <div className='h-100 bg-secondary p-5'>
                <form>
                  <div className='row g-3'>
                    <div className='col-12'>
                      <div className='form-floating'>
                        <input
                          type='text'
                          className='form-control bg-light border-0'
                          id='name'
                          placeholder='Votre nom'
                        />
                        <label htmlFor='name'>Votre nom</label>
                      </div>
                    </div>
                    <div className='col-12'>
                      <div className='form-floating'>
                        <input
                          type='email'
                          className='form-control bg-light border-0'
                          id='email'
                          placeholder='Votre courriel'
                        />
                        <label htmlFor='email'>Votre courriel</label>
                      </div>
                    </div>
                    <div className='col-12'>
                      <div className='btn-group d-flex justify-content-around'>
                        <input
                          type='radio'
                          className='btn-check'
                          name='btnradio'
                          id='btnradio1'
                          onChange={handleChange}
                          checked={checkedRadio === 'btnradio1'}
                        />
                        <label
                          className='btn btn-light py-3'
                          htmlFor='btnradio1'
                        >
                          $10
                        </label>

                        <input
                          type='radio'
                          className='btn-check'
                          name='btnradio'
                          id='btnradio2'
                          onChange={handleChange}
                          checked={checkedRadio === 'btnradio2'}
                        />
                        <label
                          className='btn btn-light py-3'
                          htmlFor='btnradio2'
                        >
                          $20
                        </label>

                        <input
                          type='radio'
                          className='btn-check'
                          name='btnradio'
                          id='btnradio3'
                          onChange={handleChange}
                          checked={checkedRadio === 'btnradio3'}
                        />
                        <label
                          className='btn btn-light py-3'
                          htmlFor='btnradio3'
                        >
                          $30
                        </label>
                      </div>
                    </div>
                    <div className='col-12'>
                      <button
                        className='btn btn-primary px-5'
                        style={{ height: '60px' }}
                      >
                        Donner maintenant
                        <div className='d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2'>
                          <i className='fa fa-arrow-right'></i>
                        </div>
                      </button>
                    </div>
                    <div className='col-12'>
                      <p className='mt-3'>Sélectionnez le mode de paiement :</p>
                      <div className='btn-group d-flex justify-content-around'>
                        <input
                          type='radio'
                          className='btn-check'
                          name='paymentMethod'
                          id='creditCard'
                        />
                        <label
                          className='btn btn-light py-3'
                          htmlFor='creditCard'
                        >
                          Carte de crédit
                        </label>

                        <input
                          type='radio'
                          className='btn-check'
                          name='paymentMethod'
                          id='paypal'
                        />
                        <label className='btn btn-light py-3' htmlFor='paypal'>
                          PayPal
                        </label>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Donate End --> */}
    </>
  )
}
export default Donate
