const BreadCrumb = ({ title }) => {
  return (
    <div
      className='container-fluid page-header mb-5 wow fadeIn'
      data-wow-delay='0.1s'
    >
      <div className='container text-center'>
        <h1 className='display-4 text-white animated slideInDown mb-4'>
          {title}
        </h1>
        <nav aria-label='breadcrumb animated slideInDown'>
          <ol className='breadcrumb justify-content-center mb-0'>
            <li className='breadcrumb-item'>
              <a className='text-white' href='#'>
                Accueil
              </a>
            </li>
            <li className='breadcrumb-item'>
              <a className='text-white' href='#'>
                Pages
              </a>
            </li>
            <li
              className='breadcrumb-item text-primary active'
              aria-current='page'
            >
              {title}
            </li>
          </ol>
        </nav>
      </div>
    </div>
  )
}
export default BreadCrumb
