import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/Navbar/Navbar'

function App() {

  const parrafo = "Aprovecha el mejor servicio de envio a domicilio."

  return (
    <>
      <NavBar />
      <ItemListContainer greeting={parrafo}/>
    </>
  )
}

export default App

