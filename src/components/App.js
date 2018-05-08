import React, { Component } from 'react';

class App extends Component {
    constructor(props){
        super(props)
        this.handleChange.bind(this);
    }
    handleChange = () => {

    }
    render(){
        return (
            <h1>Hello from React</h1>
        )
    }
}

export default App;