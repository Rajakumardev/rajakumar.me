import React from 'react'
import {Switch,Route} from 'react-router-dom'
import LandingPage from './LandingPage/LandingPage'

const Main = () => {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={LandingPage} />
            </Switch>
        </main>
    )
}

export default Main