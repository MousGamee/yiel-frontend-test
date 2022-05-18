import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import { Routes, Route} from 'react-router-dom'
import Decouvrir from './pages/Decouvrir';

function App() {
  return (
    <div className="flex w-full h-screen bg-white ">
      <Navbar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/discover' element={<Decouvrir />} />
        </Routes>
    </div>
  );
}

export default App;
