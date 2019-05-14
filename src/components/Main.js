import React from 'react'
import {Switch,Route} from 'react-router-dom'
import LandingPage from './LandingPage/LandingPage'
import ResumePage from './ResumePage/ResumePage'

const Main = () => {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={LandingPage} />
                <Route exact path='/resume' component={ResumePage} />
            </Switch>
        </main>
    )
}

export default Main