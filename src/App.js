import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import LatestNews from './components/LatestNews';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
      <LatestNews />
      <Footer />
    </div>
  );
}

export default App;
