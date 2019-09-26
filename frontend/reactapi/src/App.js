import React, {useEffect} from 'react';
import NavigationBar from "./components/NavigationBar";
import Homepage from "./components/Homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Aboutpage from "./components/Aboutpage";
import Audioplayer from "./components/Songpage.js";

function App() {
    /*useEffect(() => {
      fetch("/home").then(response => response.json().then(data => {
          console.log(data);
      })
      );
    },[]);*/
  return (
      <Router>
        <div className="container">
            <NavigationBar/>
            <Switch>
                <Route path={"/about"} component={Aboutpage}/>
                <Route path={"/home"} component={Homepage} />
                <Route path={"/song/:id"} component={Audioplayer} />
                <Route path={"/"} component={Homepage} />
            </Switch>
        </div>
      </Router>
  );
}

export default App;