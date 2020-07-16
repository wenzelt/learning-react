import React, {Component} from "react";

//declare components:

class HelloWorld extends Component{
    render() {
        return(
            <h1> Hello {this.props.name}</h1>
        )
    }
}

export default HelloWorld;