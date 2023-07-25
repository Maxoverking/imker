import "./index.css";
import "./App.css";

import MainPage from "./сomponents/MainPage/MainPage";
import { Route, Routes } from "react-router-dom";
import Contacts from "./сomponents/Сontacts/Contacts";
import Login from "./сomponents/UserLogin/Login";
import AboutUs from "./сomponents/AboutUs/AboutUs";

function App(): JSX.Element {
  return (
            <Routes>
                <Route
                    path='/imker'
                    component={MainPage}
                    exact
                >
                </Route>
                <Route
                    path='/imker/login'
                    component={Login}
                    exact
                >
                </Route>
                <Route
                    path='/imker/contact'
                    component={Contacts}
                    exact
                >
                </Route>
                <Route
                    path='/imker/about'
                    component={AboutUs}
                    exact
                >
                </Route>
            </Routes>


  );
}

export default App;
