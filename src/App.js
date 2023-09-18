import './App.css';
import Home from './page/Home';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Jasa from './page/Jasa';
import Layanan from './page/Layanan';
import Produk from './page/Produk';



function App() {
  return (
    <>
    <BrowserRouter>
     <Switch>
       <Route exact path='/' component={Home}/>
       <Route path='/jasa' component={Jasa} />
       <Route path='/layanan' component={Layanan} />
       <Route path='/produk' component={Produk} />

       
     </Switch>
   </BrowserRouter>
 </>
  );
}

export default App;
