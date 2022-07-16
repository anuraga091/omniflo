import './App.css';
import Home from './Home/Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import RageCoffee from './Brands/RageCoffee';
import RageCoffeeStores from './conditions/iflocationallow/brandsStore/RageCoffeeStores';
import LocationDenyPage from './conditions/iflocationdeny/LocationDenyPage';
import StoreNotFound from './conditions/iflocationallow/brandsStoreNotFound/StoreNotFound';
import LoadingScreen from './loader/LoadingScreen';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/rageCoffee" element={<RageCoffee/>}></Route>
          <Route path="/rageCoffee/stores" element={<RageCoffeeStores/>}></Route>
          <Route path="/rageCoffee/locationdenypage" element={<LocationDenyPage/>}></Route>
          <Route path="/rageCoffee/storenotfound" element={<StoreNotFound/>}></Route>
          <Route path="/loading" element={<LoadingScreen/>}></Route>
          {/* <Route path="/home" element={<><Header /><Home/></>}></Route> */}
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
