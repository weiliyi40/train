import { HashRouter as Router, Link, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import React, { Component, lazy ,Suspense } from 'react';
const Popular = lazy(() =>  import("../pages/popular.jsx"));
const Battle = lazy(() => import ("../pages/battle.jsx"));
const BattleResult = lazy (() => import ('../pages/battleResult.jsx'));



class App extends Component {
    render() {
        return (
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                <div className="App">
                    <div className="Nav">
                        <Link to="/">Popular</Link>
                        <Link to="/battle" style={{ marginLeft: '20px' }}>Battle</Link>
                    </div>
                    <hr />
                    <Route path="/" exact component={Popular} ></Route>
                    <Route path="/battle" exact component={Battle} ></Route>
                    <Route path="/battle/:name" exact component={BattleResult} ></Route>
                </div></Suspense>
            </Router>
        )
    };

}
export default hot(App);