import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
const App = ()=> {
  return (
    <div className="bg-primary">
      <NavBar/>
      <Hero/>
      <hr className="border-black"/>
      <About/>
      <hr className="border-black"/>

      <Contact/>
      <Footer/>
      
    </div>
  );
}
export default App;