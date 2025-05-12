import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Doc from './pages/Doc';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doc/:tema" element={<Doc />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;