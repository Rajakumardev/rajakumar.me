import React, {Component} from 'react'
import {Grid,Cell} from 'react-mdl'
import logo from '../../images/mypic.jpg'
import './LandingPage.css'

class LandingPage extends Component {
    render() {
        return (
            <Grid className="landing-grid">
                <Cell col={12} className="hero-img-container">
                    <img src={logo} className="hero-img"/>
                </Cell>
                <Cell col={12} className="desc-container">
                    <div style={{'font-family' :'Helvetica Neue','color':'white','width':'80%','margin':'0 auto'}}>
                        <h3>Hi 🙋‍♂</h3>
                        <h6>People call me Rajakumar.<code> I_Write_Code 💻.</code> I live in madurai but i would love to explore the 🌐 and beyond!.
                        Had good exprience in tech industry. And also developed couple of projects️️️️ as an indie hacker.</h6>
                    </div>
                </Cell>
                <Cell col={12} className="Cell">

                </Cell>
            </Grid>
        )
    }
}

export default LandingPage