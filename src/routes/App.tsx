
import { Routes, Route } from 'react-router-dom'
import HomePage from '../containers/Homepage/Home'
import Header from '../components/Header'
import ConsultaProduto from '../containers/Produtos/Consulta'
import MeuCarrinho from '../containers/Carrinho/CompraSessao'

function App(){
  return (
    <> 
  <Header />
  <Routes>
    <Route path='/' element={<HomePage />}/>
    <Route path='/produtos' element={<ConsultaProduto compra={''}/>}/>
    <Route path='/carrinho' element={<MeuCarrinho />}/>
    </Routes>
    </>

)};


export default App
