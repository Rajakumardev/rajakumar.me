import React, {Component} from 'react';
import {Grid,Cell,Card,CardTitle,CardText,CardActions} from 'react-mdl'
import './ResumePage.css'
import resumecov from '../../images/resumecov.jpg'

class ResumePage extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <Grid class="resumePage-grid">
                <Cell col={12}>
                    <Card style={{width:'500px',margin:'50px auto'}}>
                        <CardTitle shadow={2} style={{color:'#fff',height:'176px',background: 'url('+resumecov+') center / cover'}}>Download Resume</CardTitle>
                        <CardText>
                            Updated Resume (PDF), last updated 15 May 2019.
                        </CardText>
                        <CardActions border>
                            <center>
                                <h2>
                                    <a href="https://drive.google.com/open?id=1tI_RPAvyarheTNn5KHGAjjgLwtcJz-dT" target="_blank">
                                        <i class="fas blue fa-file-download"></i>
                                    </a>
                                </h2>
                            </center>
                        </CardActions>
                    </Card>
                </Cell>
            </Grid>
        )
    }
}

export default ResumePage