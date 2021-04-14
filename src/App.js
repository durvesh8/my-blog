import Navbar from './Navbar';
// import './App.css';
import Home from './Home';


function App() {
  // const title = "Durvesh's Blog";
  // const link = "https://github.com"
  return (
    <div className="App">
      <Navbar/>
      
      <div className="content"> 
        <Home/>
        {/* <h1>{title}</h1>
        <p>{Math.random()}</p>
        <a href={link}>GitHub</a> */}
      </div>
    </div>
  );
}

export default App;
