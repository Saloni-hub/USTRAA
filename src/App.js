import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import ProductList from './Components/ProductList';
function App() {
  return (
    <div className="App">
       <Navbar/>
       <Header/>
       <ProductList />
    </div>
  );
}

export default App;
    

