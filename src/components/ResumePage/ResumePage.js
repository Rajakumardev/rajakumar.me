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
            <Grid className="resumePage-grid">
                <Cell col={4} phone={12}  style={{margin:'50px auto'}}>
                    <Card  style={{width:'100%'}}>
                        <CardTitle shadow={3} style={{color:'#fff',height:'176px',background: 'url('+resumecov+') center / cover'}}>Download Resume</CardTitle>
                        <CardText>
                            Updated Resume (PDF), last updated 15 May 2019.
                        </CardText>
                        <CardActions border>
                            <center>
                                <h2>
                                    <a href="https://drive.google.com/open?id=1tI_RPAvyarheTNn5KHGAjjgLwtcJz-dT" target="_blank">
                                        <i className="fas blue fa-file-download"></i>
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