import Rotas from './routes/Rotas'
import Navbar from './pages/Navbar/Navbar'
import './assets/css/main.css'
import { getProdutos } from './api/apiProdutos'

function App() {
    return (
        <div className="App">
          <Navbar/>
          <Rotas/>
        </div>
    )
}

export default App