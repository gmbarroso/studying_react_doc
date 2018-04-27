import React from 'react';


//DumbComponent
class Button extends React.Component {
    constructor(props){
        super(props)

        console.log(props)
    };

    render(){
        return(
            <button type="button" onClick={this.props.x}> Click Me! </button>
        )
    }
}

export default Button;