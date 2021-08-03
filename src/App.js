import { BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact'
import Head from './Head';
import Footer from './Footer';

function App() {
  return (
    <div>
        <Router>
          <Head/>
          <Route path='/' exact component={Home}/>
          <Route path='/About' exact component={About}/>
          <Route path='/Projects' exact component={Projects}/>
          <Route path='/Contact' exact component={Contact}/>
          <Footer/>
          </Router>
    </div>
  );
}

export default App;
