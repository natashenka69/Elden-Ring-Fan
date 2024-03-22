import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Information from "./components/Information";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Platforms from "./components/Platforms";
import Test from "./components/Test";


function App() {
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <Information/>
      <Carousel/> 
      <News/>
      <Platforms/>
      <Footer/>
    </div>
  );
}

export default App;
