import React, {Component} from 'react';

export class MultilineText extends Component {
    render() {
        const text = this.props.text.split("\n").map((text, i) => i ? [<br/>, text] : text);
        return (
            <span key={this.props.text}> 
                {text}
            </span>
        )
    }
};
