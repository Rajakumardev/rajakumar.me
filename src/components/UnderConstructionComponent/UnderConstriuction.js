import React, {Component} from 'react'
import './UnderConstruction.css'
import EmojiComponent from '../EmojiComponent/Emoji'

class UnderConstruction extends Component {
    render () {
        return (
            <React.Fragment>
                <section className="breakpage">
                    <EmojiComponent emoji="&#x1F6A7;" sizeClass="largeEj"/>
                    <h1>Under Construction</h1>
                </section>
            </React.Fragment>
        )
    }
}

export default UnderConstruction