import React from 'react'
import {BrowserRouter as Router,Route, Switch, Redirect} from "react-router-dom";
import BookList from "../containers/BookList";
import UserSignUpForm from "../components/UserSignUpForm";
import UserSignInForm from "../components/UserSignInForm";
import PrivateRoute from "./PrivateRoute";


export default () => (
    <Router>
        <Switch>
            {/*<Route exact  path="/" component={BookList} />*/}
            <Route exact path={'/signup'} component={UserSignUpForm} />
            <Route exact path={'/signin'} component={UserSignInForm} />
            <PrivateRoute path={'/'} component={BookList}/>
            {/*<Route  path={'/'} render={<div> Sorry page not Found</div>} />*/}
        </Switch>
    </Router>

)