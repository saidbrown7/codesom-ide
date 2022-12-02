import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { EditorPage } from './components/pages/EditorPage';
import { Home } from './components/pages/Home';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/editor/:roomId' element={<EditorPage />}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
