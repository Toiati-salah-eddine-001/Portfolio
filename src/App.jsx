import Header from "./Conponnent/Header"
import "./App.css"
// import ParticleBackground from "./Conponnent/particleBackground"
import Section01 from "./Conponnent/Section01"
import Section02 from "./Conponnent/Section02"
import Section03 from "./Conponnent/Section03"
import Section05 from "./Conponnent/Section05"
import Section06 from "./Conponnent/Section06"
import Section07 from "./Conponnent/Section07"
function App() {
  return (
    <div className="container h-screen bg-gray-900">
    {/* <ParticleBackground/> */}
    <Header/>
    <Section01/>
    {/* <Section02/> */}
    <Section02/>
    <Section03/>
    <div className=" px-10 bg-gray-900"><Section05/></div>
    <Section06/>
    <Section07/>
    </div>
  )
}

export default App
