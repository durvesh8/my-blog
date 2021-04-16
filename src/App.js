import Navbar from './Navbar';
// import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  // const title = "Durvesh's Blog";
  // const link = "https://github.com"
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navbar/>
        
        <div className="content"> 
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/create">
              <Create/>
            </Route>
            <Route path = "/blogs/:id">
              <BlogDetails/>
            </Route>
            <Route path = "*">
              <NotFound />
            </Route>
          </Switch>
          {/* <Home/> */}
          {/* <h1>{title}</h1>
          <p>{Math.random()}</p>
          <a href={link}>GitHub</a> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
