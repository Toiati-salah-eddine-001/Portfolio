import Header from "./Conponnent/Header"
import "./App.css"
// import ParticleBackground from "./Conponnent/particleBackground"
import Section01 from "./Conponnent/Section01"
import Section02 from "./Conponnent/Section02"
import Section03 from "./Conponnent/Section03"
function App() {
  return (
    <div className="container h-screen bg-gray-900">
    {/* <ParticleBackground/> */}
    <Header/>
    <Section01/>
    <Section02/>
    <Section03/>
    </div>
  )
}

export default App
