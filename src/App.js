import './App.css';
import LandingSection from './components/landing-section/LandingSection';
import Navbar from './components/navbar/Navbar';
import ChooseUs from './components/project/ChooseUs';
import Project from './components/project/Project';
import WhatWeDo from './components/what-we-do/WhatWeDo';
import Growth from "./components/project/Growth"
import Feedback from './components/project/Feedback';
import Footer from './components/project/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingSection />
      <WhatWeDo />
      <ChooseUs/>
      <Project />
      <Growth />
      <Feedback />
      <Footer/>
    </div>
  );
}

export default App;
