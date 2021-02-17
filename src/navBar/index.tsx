import React from 'react';
import './navBar.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import HomePage from './Home';
import TodoPage from './Todo';
import TabsPage from './Tabs';

const Pages = [
    { url: "/home", component: HomePage, title: "Home" },
    { url: "/todo", component: TodoPage, title: "Todo" },
    { url: "/tabs", component: TabsPage, title: "Tabs" }
]

export default () => {
    return (
        <Router>
            <div className="NavBar">
                <Link to="/home" className="NavText">Learning Javascript at Christmas</Link>
                <div className="NavButtonContainer">
                    {
                        Pages.map( ({url, title})=>{
                            return(
                                <Link to={url} className="NavButton">{title}</Link>
                            )
                        })
                    }
                </div>
            </div>
            <Switch>
                {
                    Pages.map( ({url, component:Component}) =>{
                        return(
                            <Route path={url}>
                                <Component />
                            </Route>
                        )
                    })
                }
                <Route path="/">
                    <HomePage />
                </Route> {/**Switch works top to bottom, like cond */}
            </Switch>
        </Router>
    )
}