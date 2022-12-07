import './App.css';
import Navbar from './components/navbar';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className='App board flex'>
      <Navbar />
      <Homepage />
    </div>
  );
}

export default App;
