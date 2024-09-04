import './App.css'
import { Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import{ NavBar } from './NavBar'
import { About } from './components/pages/About'
import { Contact } from './components/pages/Contact'
import { Projects } from './components/pages/Projects'


function App() {
  return (
    <div className="App">
      <Router>      
        <NavBar />
          <Routes>
            <Route path="/portfolio/about" element={<About />} />
            <Route path="/portfolio/contact" element={<Contact />} />
            <Route path="/portfolio/projects" element={<Projects />} />
          </Routes>
      </Router>

    </div>
  );
}

export default App;