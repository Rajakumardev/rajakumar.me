import React, {Component} from 'react'
import './UnderConstructionComponent.css'
import EmojiComponent from '../EmojiComponent/EmojiComponent'

class UnderConstructionComponent extends Component {
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

export default UnderConstructionComponent