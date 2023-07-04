import Navbar from "./components/Navbar"
import Main from './components/Main'
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <>
      <header>
        <Navbar/>
      </header>

      <main>
        <ItemListContainer greeting="Bienvenido"/>
        <Main/>
      </main>

      <footer>
        
      </footer>
    </>
  );
}

export default App;
