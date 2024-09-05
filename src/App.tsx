import './App.css'
import { Route, Routes, HashRouter as Router} from 'react-router-dom'
import{ NavBar } from './NavBar'
import { About } from './components/pages/About'
import { Contact } from './components/pages/Contact'
import { Projects } from './components/pages/Projects'


function App() {
  return (
    <div className="App">
      <Router>      
        <NavBar/>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
      </Router>

    </div>
  );
}

export default App;