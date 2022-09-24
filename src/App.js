import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './pages/Navbar';
import Homepage from './pages/Homepage';
import ContactUs from './pages/ContactUs';
import Privacy from './pages/Privacy';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/ContactUs" element={<ContactUs/>} />
        <Route path="/PrivacyPolicy" element={<Privacy/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
