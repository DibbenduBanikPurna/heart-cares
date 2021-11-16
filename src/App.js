import React, { createContext, useState } from 'react';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import Form from './Components/Form/Form'
import Contact from './Components/Contact/Contact'
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Services from './Components/Services/Services';
import Authentication from './Components/Authentication/Authentication';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import MoreDetails from './Components/Services/MoreDetails';




export const userContext = createContext()
const App = () => {
  const [auths, setAuth] = useState({})
  console.log(auths)
  return (
    <Router>
      <Navbar />
      <Switch>
        <userContext.Provider value={[auths, setAuth]}>
          <Route exact path="/">
            <Banner />
          </Route>
          <Route path="/contact"> <Contact />  </Route>
         <Route path="/MoreDetails/:id">
           <MoreDetails></MoreDetails>
         </Route>
          <PrivateRoute path="/service"> <Services /> </PrivateRoute>
          <Route path="/log-in"> <Authentication /> </Route>
       
          <PrivateRoute path="/form"> <Form /> </PrivateRoute>
       
        </userContext.Provider>
        <Route path="*"><NotFound/></Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;