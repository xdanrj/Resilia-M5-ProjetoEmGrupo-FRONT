import Rotas from './routes/Rotas'
import './assets/css/main.css'
import { getProdutos } from './api/apiProdutos'

function App() {
    return (
        <div className="App">
          <Rotas/>
        </div>
    )
}

export default App