import React, {Component} from 'react'

class Message extends Component{

    constructor(){
        super()
        this.state = {
            message: 'initial state of message component'
        }
    }

    afterClick(){
        this.setState({
            message: 'state has been changed after the button has been pressed'
        })
    }
    render(){
        return(
            <div>
            <h1>{this.state.message}</h1>
            
            <button onClick={this.afterClick.bind(this)}>click me</button>
            </div>
             
        )
    }
}
export default Message
