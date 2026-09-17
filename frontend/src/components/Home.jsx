
import Navbar from './ui/shared/Navbar'
import HeroSection from './HeroSection.jsx'
import CategoryCarousel from './CategoryCarousel'
import LatestJobs from "./LatestJobs.jsx"
import Footer from "./ui/shared/Footer.jsx"
const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <CategoryCarousel/>
        <LatestJobs/>
        <Footer/>


    </div>
  )
}

export default Home