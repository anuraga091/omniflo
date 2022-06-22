import './App.css';
import Home from './Home/Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import RageCoffee from './Brand Landing Page/RageCoffee';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/rageCoffee" element={<RageCoffee/>}></Route>
          {/* <Route path="/home" element={<><Header /><Home/></>}></Route> */}
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
