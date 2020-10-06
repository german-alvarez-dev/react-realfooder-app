import React, { Component } from 'react'

class CustomToast extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bottom: -100,
            text: ''
        }
    }

    render() {
        //const hide = this.props.bottom

        return (
            <div style={{
                padding: '30px',
                backgroundColor: 'orange',
                bottom: 'bottom(${props.bottom})',
                position: 'absolute',
                right: '10px',
                width: '300px',
                zIndex: '999',
                transition: 'bottom 0,5s ease'
            }} >
                <span>Real Fooder App</span>

                {/* <span> {text} </span> */}

            </div>
        )
    }

}

export default CustomToast