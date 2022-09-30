import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './pages/Navbar';
import Homepage from './pages/Homepage';
import ServicesPage from './pages/ServicesPage';
import FAQPage from './pages/FAQPage';
import ContactUs from './pages/ContactUsPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/Services" element={<ServicesPage/>} />
        <Route path="/FAQ" element={<FAQPage/>} />
        <Route path="/ContactUs" element={<ContactUs/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
