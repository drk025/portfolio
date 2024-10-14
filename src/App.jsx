import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import SubjectMaterials from "./components/SubjectMaterials";
const App = ()=> {
  return (
    // <div className="bg-primary">
      <div>

      <NavBar/>
      {/* <Hero/>
      <hr className="border-black"/>
      <About/>
      <hr className="border-black"/>

      <Contact/> */}
      <SubjectMaterials/>
      <Footer/>
      
    </div>
  );
}
export default App;