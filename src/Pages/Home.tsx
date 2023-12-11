import React from 'react'
import Carousel from '../Components/Carousel'
import AboutSection from '../Components/AboutSection'
import BackToTop from '../Components/BackToTop'
import CausesSection from '../Components/CausesSection'
import ServicesSection from '../Components/ServicesSection'
import DonateSection from '../Components/DonateSection'
import TeamSection from '../Components/TeamSection'
import TestimonialSection from '../Components/TestimonialSection'

const Home = () => {
  return (
    <React.Fragment>
      {/* <!-- Carousel Start --> */}
      <Carousel />
      {/* <!-- Carousel End --> */}

      {/* <!-- About Start --> */}
      <AboutSection />
      {/* <!-- About End --> */}

      {/* <!-- Causes Start --> */}
      <CausesSection />
      {/* <!-- Causes End --> */}

      {/* <!-- Service Start --> */}
      <ServicesSection />
      {/* <!-- Service End --> */}

      {/* <!-- Donate Start --> */}
      <DonateSection />
      {/* <!-- Donate End --> */}

      {/* <!-- Team Start --> */}
      <TeamSection />
      {/* <!-- Team End --> */}

      {/* <!-- Testimonial Start --> */}
      {/* <TestimonialSection /> */}
      {/* <!-- Testimonial End --> */}

      {/* <!-- Back to Top --> */}
      <BackToTop />
    </React.Fragment>
  )
}
export default Home
