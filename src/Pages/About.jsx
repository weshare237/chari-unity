import AboutSection from '../Components/AboutSection'
import BreadCrumb from '../Components/BreadCrumb'
import ServicesSection from '../Components/ServicesSection'
import TeamSection from '../Components/TeamSection'

const About = () => {
  return (
    <>
      <BreadCrumb title='À propos de nous' />

      <AboutSection />
      <ServicesSection />
      <TeamSection />
    </>
  )
}
export default About
