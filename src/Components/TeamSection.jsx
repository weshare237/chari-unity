import firstTeam from '../assets/img/carousel-11.jpg'
import secondTeam from '../assets/img/carousel-12.jpg'
import thirdTeam from '../assets/img/donate.jpg'
import fourthTeam from '../assets/img/mission.jpg'
import fifthTeam from '../assets/img/fifthTeam.jpg'
import seventhTeam from '../assets/img/seventhTeam.jpg'

const TeamSection = () => {
  return (
    <div className='container-xxl py-5'>
      <div className='container'>
        <div
          className='text-center mx-auto mb-5 wow fadeInUp'
          data-wow-delay='0.1s'
          style={{ maxWidth: '500px' }}
        >
          <div className='d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3'>
            Membres de l'équipe
          </div>
          <h1 className='display-6 mb-5'>
            Rencontre avec nos soldats ordinaires
          </h1>
        </div>

        <div className='grid gap-2 lg:grid-cols-2  sm:grid-cols-1'>
          <div className='aspect-w-1 aspect-h-1'>
            <img
              className='object-cover w-full h-full rounded-lg'
              src={firstTeam}
              alt=''
            />
          </div>
          <div className='aspect-w-1 aspect-h-1'>
            <img
              className='object-cover w-full h-full rounded-lg'
              src={secondTeam}
              alt=''
            />
          </div>
          <div className='aspect-w-1 aspect-h-1'>
            <img
              className='object-cover w-full h-full rounded-lg'
              src={thirdTeam}
              alt=''
            />
          </div>
          <div className='aspect-w-1 aspect-h-1'>
            <img
              className='object-cover w-full h-full rounded-lg'
              src={fourthTeam}
              alt=''
            />
          </div>

          <div className='aspect-w-1 aspect-h-1'>
            <img
              className='object-cover w-full h-full rounded-lg'
              src={fifthTeam}
              alt=''
            />
          </div>

          <div className='aspect-w-1 aspect-h-1'>
            <img
              className='object-cover w-full h-full rounded-lg'
              src={seventhTeam}
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default TeamSection
