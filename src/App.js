import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CoursePage from './pages/CoursePage';
import AboutPage from './pages/AboutPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import CookiesPolicyPage from './pages/CookiesPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import CustomNavbar from './components/CustomNavbar';
import Footer from './components/Footer'; // Importa el nuevo componente Footer
import { DataProvider } from './DataContext';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App">
          <CustomNavbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/course/:id" element={<CoursePage />} />
            <Route path="/AboutPage" element={<AboutPage />} />
            <Route path="/PrivacyPolicy" element={<PrivacyPolicyPage />} />
            <Route path="/CookiesPolicy" element={<CookiesPolicyPage />} />
            <Route path="/TermsOfService" element={<TermsOfServicePage />} />
          </Routes>
          <Footer /> {/* Añade el Footer aquí */}
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
