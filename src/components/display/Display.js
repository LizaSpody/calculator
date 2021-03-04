import React from 'react';
import './Display.css';

class Display extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render () {
       return (
           <div className='display-wrap' >
               <div className="string">{ this.props.string }</div>
               <div className="result">{ this.props.result }</div>
           </div>
       )
    }
}

export default Display
