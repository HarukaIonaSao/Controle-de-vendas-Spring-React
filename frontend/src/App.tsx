import Header from "./components/Header"
import VendasAnuais from "./components/VendasAnuais"

function App() {  
  return (
  <>

  <Header/>
  <main>
      <section id="sales">
        <div className="dsmeta-container">
          <VendasAnuais/>

          </div>
       </section>
  </main> 
  </>    
  )  
}

export default App;
