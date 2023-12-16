
import './App.css';
import { Header } from './components/header/header';
import { Cards } from './components/main/card';
import { Footer } from './components/footer/footer';

function App() {
  return (
    <div className="App">
       <Header/>
       <Cards/>
       <Footer/>
     
    </div>
  );
}

export default App;
