import React from 'react';

import { redner, render } from 'react-dom';

// Import css
import css from './styles/style.styl'

//import components
import Main from './components/Main'
import Single from './components/Single'
import PhotoGrid from './components/PhotoGrid'

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store'

const router =(
    <Provider>
        <Router history={browserHistory}>
            <Route path='/' component={Main}>
                <IndexRoute component={PhotoGrid}></IndexRoute>
                <Route path='/view/:postId' component={Single}></Route>
            </Route>
        </Router>
    </Provider>
)

render(router, document.getElementById('root'))