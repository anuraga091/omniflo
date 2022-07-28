import './App.css';
import React,{useState} from 'react';
import Home from './Home/Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Card } from '@mui/material';
import Brand from './Brands/Brand';
import BrandStores from './conditions/iflocationallow/brandsStore/BrandStores';
import LocationDenyPage from './conditions/iflocationdeny/LocationDenyPage';
import StoreNotFound from './conditions/iflocationallow/brandsStoreNotFound/StoreNotFound';


function App() { 
  const [data,setData] = useState({});
  return (
    <Card sx={{ maxWidth: 500, margin: '0 auto', color:'#fff' }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:brandName" element={<Brand data= {data} brandName = {setData} />}></Route>
          <Route path={encodeURI(`:brandName/Stores`)} element={<BrandStores data={data} brandName = {setData}/>}></Route>
          <Route path={encodeURI(`:brandName/Location denied`)} element={<LocationDenyPage data={data} brandName = {setData}/>}></Route>
          <Route path={encodeURI(`:brandName/Store Not Found`)} element={<StoreNotFound data={data} brandName = {setData}/>}></Route>
        </Routes>
      </Router>
    </Card>
  );
}

export default App;
