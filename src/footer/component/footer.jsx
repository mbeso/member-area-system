import React, {Component} from 'react'

export default class Footer extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <footer style={{background: 'lightgray', marginTop: '20px', textAlign: 'center'}}>
                <div className="container">
                    <div className="row">
                        <div style={{padding: '0px 10px 10px 10px'}}>&copy; 2018</div>
                    </div>
                </div>
            </footer>
        )
    }
}