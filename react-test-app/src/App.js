import './App.css';
import Home from './views/home/Home';
import Home2 from './views/home/Home2';

function App() {
  return (
    <div className="App">
      <Home msg="teste home #1"></Home>
      <Home2 msg="teste home #2"></Home2>
      <Home2 msg="teste home #3"></Home2>
      <Home msg="teste home #1"></Home>
    </div>
    
  );
}

export default App;
