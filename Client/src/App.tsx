import './styles/main.css';

import { NavBar } from './components/NavBar';
import { Form } from './components/Form';
import { Cards } from './components/Cards/Cards';
import { Sobre } from './components/Sobre';
import { Info } from './components/Info';
import { Footer } from './components/Footer';

function App() {
  return (
    <div>
      <NavBar />
      <Form />
      <Cards />
      <Sobre />
      <Info />
      <Footer />
    </div>
  )
}

export default App