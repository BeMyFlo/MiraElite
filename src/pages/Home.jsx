import Slider from '../components/slider';
import Introduce from '../components/introduce';
import Benefits from '../components/benefits';
import Projects from '../components/projects';
import AboutUs from '../components/about_us';
import Team from '../components/team';
import Footer from '../components/footer';
import Contact from '../components/contact';

function Home() {
  return (
    <div className='bg-slate-50'>
      <Slider/>
      <Introduce/>
      <Benefits/>
      <Projects/>
      <AboutUs/>
      <Team/>
      <Contact/>
      <Footer/>
    </div>
  );
  
}

export default Home;
