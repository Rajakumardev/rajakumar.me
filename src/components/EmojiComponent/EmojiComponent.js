import React, {Component} from 'react'

class EmojiComponent extends Component {
    constructor (props){
        super(props)
    }
    render () {
        return (
            <span
                role="img"
                className={this.props.sizeClass}>
                {this.props.emoji}
            </span>
        )
    }
}

export default EmojiComponent