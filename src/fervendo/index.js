import React from 'react';

class Fervendo extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        if(this.props.celsius >= 100) {
            return <p>A água está fervendo</p>
        }

        return <p>A água não está fervendo</p>
    }
}

export default Fervendo;