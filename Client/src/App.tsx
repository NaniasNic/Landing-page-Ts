import './styles/main.css';

import { NavBar } from './components/NavBar';
import { Form } from './components/Form';
import { Cards } from './components/Cards/Cards';

function App() {
  return (
    <div>
      <NavBar />
      <Form />
      <Cards />
    </div>
  )
}

export default App