import './App.css';
import About from './components/About';
import Announcement from './components/Announcement';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
// import EventCorousel from './components/EventCorousel';
import Numbers from './components/Numbers';
import EventPlanned from './components/EventPlanned';
import TaskForce from './components/Taskforce';
import Timeline from './components/Timeline';
import Footer from './components/Footer';

function App() {
  return (
    <div className='relative'>
      <Banner />
      <About />
      <Numbers />
      <TaskForce />
      <Timeline />
      <EventPlanned />
      <Gallery />
      <Footer/>
      {/* <EventCorousel/> */}
      <Announcement />

    </div>

  );
}

export default App;
