import React, {useEffect} from 'react';
import NavigationBar from "./components/NavigationBar";
import Homepage from "./components/Homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Aboutpage from "./components/Aboutpage";
import Songpage from "./components/Songpage.js";
import NameForm from "./components/NameForm";

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
                <Route path={"/song/:id"} component={Songpage} />
                <Route path={"/metric"} component={NameForm} />
                <Route path={"/"} component={Homepage} />
            </Switch>
        </div>
      </Router>
  );
}

export default App;