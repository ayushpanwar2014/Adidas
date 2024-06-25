import Gallery from "./components/Gallery/Gallery"
import Gallery2 from "./components/Gallery2/Gallery2"
import Feature from "./components/Feature/Feature"
import Navbar from "./components/Navbar/Navbar"
import Shoe from "./components/Shoe/Shoe"
import Welcome from "./components/Welcome/Welcome"

const App = () => {
  return (

    <>
       
      <section>
        <Navbar />
      </section>

      <section>
        <Welcome />
      </section>

      <section>
        <Gallery />
      </section>

      <Shoe />

      <section>
      <Gallery2/>
      </section>

      <section>
      <Feature/>
      </section>
      
    </>
  )
}

export default App