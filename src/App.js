
import Container from './Container';
import Header from './components/Header';
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Container />
        <Footer />
      </main>
    </div>
  );
}

export default App;
